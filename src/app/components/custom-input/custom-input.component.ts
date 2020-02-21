import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {

  @Input('value') value = '';
  @Output() valueChange = new EventEmitter();

  updateValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }

}
