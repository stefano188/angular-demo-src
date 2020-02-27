import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  log(firstName) {
    console.log('firstName change', firstName);
  }

  submit(f: NgForm) {
    console.log('form ', f);
    console.log('json form', f.value);
    console.log('form controls', f.controls);
  }
}
