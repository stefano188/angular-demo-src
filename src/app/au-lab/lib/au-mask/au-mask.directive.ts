import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import * as includes from 'lodash.includes';
import * as findLastIndex from 'lodash.findlastindex';
import * as findIndex from 'lodash.findindex';
import { SPECIAL_CHARACTERS, TAB, overwriteCharAtPosition, LEFT_ARROW, RIGHT_ARROW, BACKSPACE, DELETE, CTRL, CMD, C, V } from './mask-utils';
import { maskDigitValidators, neverValidator } from './digit_validators';


@Directive({
  selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

  @Input('au-mask')
  mask = '';

  input: HTMLInputElement;

  fullFieldSelected = false;

  fstMetaKey = false;

  contentSelected = '';
  contentClipboard = '';

  constructor(el: ElementRef) { 
    this.input = el.nativeElement;
  }

  ngOnInit() {
    
    this.input.value = this.buildPlaceHolder();
  }

  buildPlaceHolder() {

    const chars = this.mask.split('');

    return chars.reduce((result, char) => {
      return result += 
        includes(SPECIAL_CHARACTERS, char) ? char : '_';
    }, '');

    
  }

  // detect the browser select event
  @HostListener('select', ['$event'])
  onSelect($event: UIEvent) {
    // console.log('onSelect', $event);

    // true if the whole field is selected
    this.fullFieldSelected = this.input.selectionStart == 0 
        && this.input.selectionEnd === this.input.value.length;


    const cursorPosition = this.input.selectionStart;
    const endPosition = this.input.selectionEnd;
    // if something is selected
    if (endPosition > cursorPosition) {
      const selected = this.input.value.slice(cursorPosition, endPosition);
  
      this.contentSelected = selected.split('')
        .reduce((result, char) => {
          return result += !includes(SPECIAL_CHARACTERS, char) && char != '_' ? char : '';
        }, '');
      console.log('contentSelected', this.contentSelected);
    }
  }


  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode) {
    console.log('keyCode', keyCode);


    if (keyCode !== TAB) {
      $event.preventDefault();
    }

    // from keyCode to the corresponding char
    const key = String.fromCharCode(keyCode);
    console.log('key pressed', key);

    // the current position of the cursor where we are typing the char
    const cursorPosition = this.input.selectionStart;

    // if the whole field is selected, 
    // we have to reset the value of the field and start typing at the first not special character
    if (this.fullFieldSelected) {
      // reset the field value
      this.input.value = this.buildPlaceHolder();

      // take the index of the first position of not special character
      const firstPlaceHolderPos = findIndex(this.input.value, char => char === '_');

      // set the current position for typing the first character
      this.input.setSelectionRange(firstPlaceHolderPos, firstPlaceHolderPos);
    }

    switch(keyCode) {
      case LEFT_ARROW:
        this.handleLeftArrow(cursorPosition);
        return;

      case RIGHT_ARROW:
        this.handleRightArrow(cursorPosition);
        return;

      case BACKSPACE:
        this.handleBackSpace(cursorPosition);
        return;

      case DELETE:
        this.handleDelete(cursorPosition);
        return;
      
      case CMD:
        this.fstMetaKey = true;
        return;

      case CTRL:
        this.fstMetaKey = true;
        return;
      
      case C:
        if (this.fstMetaKey) {
          this.copySelection();
          this.fstMetaKey = false;
          return;
        }
      
      case V:
        if (this.fstMetaKey) {
          this.pasteSelection(cursorPosition);
          this.fstMetaKey = false;
          return;
        }

    }

    this.validateAndOverwriteChar(cursorPosition, key);

  }

  validateAndOverwriteChar(cursorPosition, key) {
    // takes the mask of the current position
    const maskDigit = this.mask.charAt(cursorPosition);
    // takes the digit validator function corresponding to the mask
    const digitValidatorFn = maskDigitValidators[maskDigit] || neverValidator;

    if (digitValidatorFn(key)) {
      overwriteCharAtPosition(this.input, cursorPosition, key);
      this.handleRightArrow(cursorPosition);
    }

  }

  handleDelete(cursorPosition) {
    overwriteCharAtPosition(this.input, cursorPosition, '_');
    this.input.setSelectionRange(cursorPosition, cursorPosition);
  }


  handleBackSpace(cursorPosition) {
    const previousPos = this.calculatePreviousCursorPos(cursorPosition);
    if (previousPos >= 0) {
      overwriteCharAtPosition(this.input, previousPos, '_');
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  handleLeftArrow(cursorPosition) {
    const previousPos = this.calculatePreviousCursorPos(cursorPosition);
    if (previousPos >= 0) {
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  handleRightArrow(cursorPosition) {
    const valueAfterCursor = this.input.value.slice(cursorPosition + 1);
    // find the index of the char relative to the string valueAfterCursor
    const nextPos = findIndex(valueAfterCursor, char => !includes(SPECIAL_CHARACTERS, char));
    if (nextPos >= 0) {
      const newCursorPos = cursorPosition + nextPos + 1;
      this.input.setSelectionRange(newCursorPos, newCursorPos);
    }
  }

  private calculatePreviousCursorPos(cursorPosition: number): number {
    const valueBeforeCursor = this.input.value.slice(0, cursorPosition);
    return findLastIndex(valueBeforeCursor, char => !includes(SPECIAL_CHARACTERS, char));
  }

  copySelection() {
    this.contentClipboard = this.contentSelected;
    navigator.clipboard.writeText(this.contentClipboard)
      .catch(err => console.error(err));
  }

  pasteSelection(cursorPosition) {

    navigator.clipboard.readText()
      .then(value => {
        // console.log('clipboard.readText:', value);

        let curPos = cursorPosition;
        const chars = value.split('');
        chars.forEach(el => {
          this.validateAndOverwriteChar(curPos++, el);
        });


      })
      .catch(err => console.error(err));

  }


}

