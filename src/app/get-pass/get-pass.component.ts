import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-get-pass',
  templateUrl: './get-pass.component.html',
  styleUrls: ['./get-pass.component.sass']
})
export class GetPassComponent implements OnInit {

  applications: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.applications = db.list('PasswordBank').valueChanges();
   }

  ngOnInit(): void {
  }

}
