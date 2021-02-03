import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input()
  icon: string;

  @ContentChild(InputRefDirective, {static: false})
  input: InputRefDirective;

  constructor() { }

  ngAfterContentInit() {
    if (!this.input) {
      console.error("input is not present");
    }
  }

  /* Angular checks the property during change detection phase and update the element */
  /* bind the class .input-focus to the host element */
  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
      // 'fa': true,
    };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}
