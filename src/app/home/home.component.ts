import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    title = 'Lycee';
    description = 'Angular-Fire-Demo';
    itemValue = '';
    items: Observable<any[]>;

    constructor(public db: AngularFireDatabase ) {
      this.items = db.list('items').valueChanges();
    }
    onSubmit() {
      this.db.list('items').push({ content: this.itemValue});
      this.itemValue = '';
    }


  ngOnInit() {

  }

}
