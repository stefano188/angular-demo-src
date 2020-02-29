import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {

  form = new FormGroup({
    username: new FormControl('', 
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ], 
      UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required),
    info: new FormGroup({
      identity: new FormControl(),
      drivingLicense: new FormControl()
    })
  })

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
    this.form.get('info').setErrors({
      message: 'identity or driving license required'
    })
  }

  get username() {
    return this.form.get('username');
  }

  get passowrd() {
    return this.form.get('password');
  }

  get info() {
    return this.form.get('info');
  }

  get identity() {
    return this.form.get('info.identity');
  }

  get drivingLicense() {
    return this.form.get('info.drivingLicense');
  }
}
