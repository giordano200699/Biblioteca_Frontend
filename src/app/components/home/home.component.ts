import { Component, OnInit } from '@angular/core';
var firebase = require('firebase');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyBCLQrAKuRbKK0IBAPXSGEFWAo9mzHm_04",
      authDomain: "biblioteca-957c1.firebaseapp.com",
      databaseURL: "https://biblioteca-957c1.firebaseio.com",
      projectId: "biblioteca-957c1",
      storageBucket: "biblioteca-957c1.appspot.com",
      messagingSenderId: "9115487890",
      appId: "1:9115487890:web:c8dba8a2a164f4f4"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        alert("Bienvenido "+user.displayName);
        console.log(user)
        // User is signed in.
      } else {
        alert("no hay");
        // No user is signed in.
      }
    });
  }

}
