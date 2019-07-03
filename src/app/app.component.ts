import { Component } from '@angular/core';
var firebase = require('firebase');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Fernando';
  carga = false;
  ngOnInit(){
    if(!this.carga){
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
      this.carga = true;
    }
    
  }
}
