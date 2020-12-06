import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UsernameValidators } from './username.validator';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-pass',
  templateUrl: './add-pass.component.html',
  styleUrls: ['./add-pass.component.sass']
})
export class AddPassComponent implements OnInit {

  form;
  records;
  items: Observable<any[]>;
  subscription: AngularFireList<any>;

  get username() {
    return this.form.get('username');
  }

  get application() {
    return this.form.get('application');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(fb: FormBuilder, db: AngularFireDatabase) {
    this.subscription = db.list('/PasswordBank');
    this.items = this.subscription.valueChanges();
    console.log(this.items);


    this.form = fb.group({
      application: ['', Validators.required],
      username: ['', [Validators.required, UsernameValidators.cannotContainSpace]],
      password: ['', Validators.required]
    });


   }
   //TOD0: Hash the password, then asynchronously handle the successfull insertion.
   submit(app) {
     this.subscription.push({
      Application: app.application,
      username: app.username,
      password: app.password
     });
     console.log(app);
   }

  ngOnInit(): void {
  }

}
