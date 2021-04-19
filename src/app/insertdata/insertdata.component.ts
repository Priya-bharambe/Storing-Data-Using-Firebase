import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {

  fnameValue = '';
  lnameValue='';
  emailValue='';
  addressValue='';
  cityValue='';
  stateValue='';
  countryValue='';

  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
  onSubmit() {
    this.db.list('items').push({ fname: this.fnameValue, lname: this.lnameValue, email: this.emailValue, address: this.addressValue, city: this.cityValue, state: this.stateValue, country: this.countryValue });
    this.fnameValue = '';
    this.lnameValue = '';
    this.emailValue = '';
    this.addressValue = '';
    this.cityValue = '';
    this.stateValue = '';
    this.countryValue = '';
  }


  ngOnInit(): void {
  }

}
