import { UsernameValidators } from './username.validator';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pass',
  templateUrl: './add-pass.component.html',
  styleUrls: ['./add-pass.component.sass']
})
export class AddPassComponent implements OnInit {

  form = new FormGroup({
    application: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, UsernameValidators.cannotContainSpace]),
    password: new FormControl('', [Validators.required])
  });

  get username() {
    return this.form.get('username');
  }

  get application() {
    return this.form.get('application');
  }

  get password() {
    return this.form.get('password');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
