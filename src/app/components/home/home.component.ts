import { Component, OnInit } from '@angular/core';
var firebase = require('firebase');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  usuario = null;

  ngOnInit() {
    /*var miClase = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        miClase.usuario = user;
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        alert("Bienvenido "+displayName);
        console.log(user)
        // User is signed in.
      } else {
        alert("No hay sesión.");
        // No user is signed in.
      }
    });*/
  }
  
  /*
  cerrarSesion(){
    if(this.usuario){
      firebase.auth().signOut().then(function() {
        alert("Se ha cerado la sesión");
      }).catch(function(error) {
        alert("Ha ocurrido un error");
      });
    }else{
      alert("No hay sesión para cerrar.");
    }
  }
  */
}
