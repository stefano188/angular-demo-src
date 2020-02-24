import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-output',
  templateUrl: './demo-output.component.html',
  styleUrls: ['./demo-output.component.css']
})
export class DemoOutputComponent {

  value = '';
  
  onDemoOutputClick(emitValue) {
    console.log("DemoOutputComponent onClick.. ", emitValue);
    this.value = emitValue.otherValue;
    console.log('other value', this.value);
  }

  onDemoOutputFocus() {
    console.log("DemoOutputComponent onFocus");
  }
}
