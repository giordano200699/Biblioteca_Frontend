import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Cuenta } from '../../interfaces/cuenta.interface';
//import * as io from 'socket.io-client';

var firebase = require('firebase');
var firebaseui = require('firebaseui');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


  login: Cuenta = {
    nombre : '',
    contrasenia: ''
  };

  public isError = false;
  carga;
  ui= null;
  firebase = null;

  constructor(private autentificacion: AuthenticationService,
              private router: Router,
              private ActivatedRouter: ActivatedRoute) {
      //var socket = io();
      // socket.on('some event', function(msg){
      //   //alert(msg.for);
      // });
      this.carga = false;

  }

 
  ngOnInit() {
    //window.open('https://bibliotecafrontend.herokuapp.com/loginFirebase', 'Sign In', 'width=985,height=735');
    
    if(!this.carga){
      this.carga = true;
      setTimeout (()=>{this.cargarHtmlLogin(this.autentificacion);}, 1000); 
    }
    
  }

  cargarHtmlLogin(miAutentificacion):void{
    var database = firebase.database();
    var router = this.router
    if(firebaseui.auth.AuthUI.getInstance()){
      var ui = firebaseui.auth.AuthUI.getInstance();
    }else{
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', {
      
      signInOptions: [
          //firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.log(authResult);
          
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              miAutentificacion.loginGoogle(user.email, user.uid).subscribe( data => {
                  if (data[0]) {
                    if (data[0].tipoUsuarioId < 11) {
                      console.log( 'Es usuario' );
                      router.navigate(['/pedidos']);
                    } else {
                      console.log('es administrador');
                      router.navigate(['/administrador/prestamos']);
                    }
                  } else {
                    alert(data.descripcion);
                    location.reload();
                  }
              });
              console.log(user)

              
              // User is signed in.
            } else {
              console.log("No hay sesión.");
              // No user is signed in.
            }
          });
          return false;
        },
      },
      signInSuccessUrl: 'https://bibliotecafrontend.herokuapp.com/home',
      // Other config options...
  });
  }

  iniciarSesion(): void {
    this.autentificacion.login(this.login.nombre, this.login.contrasenia).subscribe( data => {
                     console.log(data[0]);
                     if (data[0]) {
                       if (data[0].tipoUsuarioId < 11) {
                         console.log( 'Es usuario' );
                         this.router.navigate(['/pedidos']);
                         this.isError = false;
                       } else {
                         console.log('es administrador');
                         this.router.navigate(['/administrador/prestamos']);
                         this.isError = false;
                       }
                     } else {
                       console.log('No existe un usuario con esos datos.' );
                       this.isError = true;
                     }
                     this.isError = true;
    });
  }
}
