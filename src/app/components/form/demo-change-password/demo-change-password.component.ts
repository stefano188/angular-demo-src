import { PasswordValidators } from './password-validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-change-password',
  templateUrl: './demo-change-password.component.html',
  styleUrls: ['./demo-change-password.component.css']
})
export class DemoChangePasswordComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.validOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validators: PasswordValidators.shouldMatch } )
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
