import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'custom-output',
  templateUrl: './custom-output.component.html',
  styleUrls: ['./custom-output.component.css']
})
export class CustomOutputComponent {

  @Input('value') value = '';
  @Output('value') valueChange = new EventEmitter();

  @Output('click') click = new EventEmitter();
  @Output('focus') focus = new EventEmitter();

  onClick(value: string) {
    console.log('CustomOutputComponent onClick emitter');
    let otherValue = value.toUpperCase();
    this.click.emit(
      {
        clickValue : value,
        otherValue : otherValue
      });
  }

  onFocus() {
    console.log('CustomOutputComponent onFocus emitter');
    this.focus.emit();
  }
}
