import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.css']
})
export class DemoInputComponent  {

  @Input('value') value = '';
  @Output() valueChange = new EventEmitter();

  valueTwo = '';

  updateValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
  
  onKeyUp() {
    console.log('w/o ngModel emitting', this.value);
  }

  onKeyUpTwo() {
    console.log('with ngModel emitting', this.valueTwo);
  }

}
