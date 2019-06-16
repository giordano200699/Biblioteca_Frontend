import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
var firebase = require('firebase');
var firebaseui = require('firebaseui');
//import { Cuenta } from '../../interfaces/cuenta.interface';

@Component({
  selector: 'app-loginFirebase',
  templateUrl: './loginFirebase.component.html'
})
export class LoginFirebaseComponent implements OnInit {



  constructor(private autentificacion: AuthenticationService,
              private router: Router,
              private ActivatedRouter: ActivatedRoute) { }

        //     loginWithGoogle() {
        //     return firebaseAuth().signInWithPopup(googleProvider);
        // }

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
	  var database = firebase.database();
	  var ui = new firebaseui.auth.AuthUI(firebase.auth());


	 //  var starCountRef = database.ref('perros').orderByKey().limitToFirst(8);
	 //  console.log(starCountRef);
		// starCountRef.on('value', function(snapshot) {
		// 	console.log(snapshot.val());
        // });
        // window.open('about:blank', '_blank', 'width=515,height=680,top=260,left=702,location=1,resizable=1,statusbar=1,toolbar=0');
        // loginWithGoogle()
        // .catch(function (error) {
        //     alert(error);
        // });
        
		ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            callbacks: {
              signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                document.getElementById('loader').style.display = 'false';
                return true;
              },
              uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
              }
            },
            signInSuccessUrl: 'https://bibliotecafrontend.herokuapp.com/home',
            // Other config options...
        });
  }

}
