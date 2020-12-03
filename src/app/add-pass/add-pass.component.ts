import { UsernameValidators } from './username.validator';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-pass',
  templateUrl: './add-pass.component.html',
  styleUrls: ['./add-pass.component.sass']
})
export class AddPassComponent implements OnInit {

  form = new FormGroup({
    application: new FormControl(),
    username: new FormControl('', [UsernameValidators.cannotContainSpace]),
    password: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

}
