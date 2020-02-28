import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];

  otherContacts = [
    { id: 3, name: 'Hangout' },
    { id: 4, name: 'Skype' },
  ];

  log(firstName) {
    console.log('firstName change', firstName);
  }

  submit(f: NgForm) {
    console.log('form ', f);
    console.log('json form', f.value);
    console.log('form controls', f.controls);
  }
}
