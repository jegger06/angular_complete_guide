import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAgLILRqUYxzpixDLIT4i-M_BYzOnoy5OU",
      authDomain: "udemy-http-e3e1e.firebaseapp.com",
    });
  }

}
