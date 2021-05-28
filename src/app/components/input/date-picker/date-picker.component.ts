import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgbDate, NgbModule, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap'


@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}


@Component({
  selector: 'datepicker-popup',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class DatePickerComponent implements ControlValueAccessor, OnInit {

  @Input('nane') name;
  @Input('ngModel') ngModel;

  onChange = (ngModel) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log('dateValue', this.ngModel);
  }

  writeValue(value: any): void {
      this.ngModel = value;
  }

  registerOnChange(onChange: any): void {
      this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
      this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
      this.disabled = isDisabled;
  }

  onKeyDown() {
      this.changeValue();
  }

  onValueChange(event) {
      console.log('on value change', event);
      this.changeValue();
  }

  private changeValue() {
      if (!this.disabled) {
          this.markAsTouched();
          this.onChange(this.ngModel);
      }
  }

  markAsTouched() {
      if (!this.touched) {
          this.onTouched();
          this.touched = true;
      }
  }
}
