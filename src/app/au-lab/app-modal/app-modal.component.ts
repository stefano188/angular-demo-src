import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent implements OnInit {

  loginActive = true;

  constructor() { }

  ngOnInit() {
  }

  setLoginActive(loginActive) {
    this.loginActive = loginActive;
  }
}
