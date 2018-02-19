import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

interface Contact {
  name: string,
  age: number,
  email: string
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <ul>
        <li *ngFor="let contact of contacts | async">
          <contact-card [contact]="contact"></contact-card>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent implements OnInit {
  contacts: Observable<Contact[]>;
  ngOnInit() {
    this.contacts = Observable.of([
      {
        "id": 1,
        "name": "Laura",
        "email": "lbutler0@latimes.com",
        "age": 47
      },
      {
        "id": 2,
        "name": "Walter",
        "email": "wkelley1@goodreads.com",
        "age": 37
      },
      {
        "id": 3,
        "name": "Walter",
        "email": "wgutierrez2@smugmug.com",
        "age": 49
      },
      {
        "id": 4,
        "name": "Jesse",
        "email": "jarnold3@com.com",
        "age": 47
      },
      {
        "id": 5,
        "name": "Irene",
        "email": "iduncan4@oakley.com",
        "age": 33
      }
    ]);
  }
}