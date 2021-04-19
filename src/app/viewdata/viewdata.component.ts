import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

  itemValue = '';
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
  // onSubmit() {
  //   this.db.list('items').push({ content: this.itemValue });
  //   this.itemValue = '';
  // }

  ngOnInit(): void {
  }

}
