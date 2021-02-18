import { Directive, HostListener } from '@angular/core';

@Directive({
  // applies to input inside au-fa-input 
  selector: 'au-fa-input input'
})
export class InputRefDirective {

  focus = false;

  /* listen to 'focus' event on the element and provide onFocus handler method */
  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

}
