import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appStringRange]'
})
export class StringRangeDirective {

  @Input('fromIndex') from: number = 0;
  @Input('toIndex') to: number = 0;

  constructor(private el: ElementRef) { }

  @HostListener('blur')
  onBlur() {
    console.log('from', this.from, ' , to', this.to);
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.substring(this.from, this.to);
  }

}
