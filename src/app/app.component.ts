import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-demo-src';
  link;

  ngOnInit() {
    let linknum = localStorage.getItem('linknum');
    this.link = linknum ? (linknum as any) : 1;
  }
  
  toggleActive(n: number) {
    this.link = n;
    localStorage.setItem('linknum', n.toString());
  }
}

