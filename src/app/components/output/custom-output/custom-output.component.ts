import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'custom-output',
  templateUrl: './custom-output.component.html',
  styleUrls: ['./custom-output.component.css']
})
export class CustomOutputComponent {

  @Input('value') value = '';
  @Output('value') valueChange = new EventEmitter();

  @Output('change') change = new EventEmitter();
  
  onClick() {
    console.log('CustomOutputComponent onClick emitter');
    let otherValue = this.value ? this.value.toUpperCase() : this.value;
    this.emitValue(otherValue);
  }

  onKeyUp() {
    console.log('onKeyUp ', this.value);
    let otherValue = this.value ? this.value.toLowerCase() : this.value;
    this.emitValue(otherValue);
  }

  private emitValue(otherValue) {
    this.change.emit(
      {
        clickValue : this.value,
        otherValue : otherValue
      });
  }
}
