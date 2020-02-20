import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo-src';
  link = 1;
  
  toggleActive(n: number) {
    this.link = n;
  }
}
