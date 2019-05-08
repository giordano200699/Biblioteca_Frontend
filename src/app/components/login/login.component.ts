import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthenticationService } from '../../services/authentication.service';
import {Router } from '@angular/router';
import { Cuenta } from '../../interfaces/cuenta.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  login:Cuenta = {
    nombre : '',
    contrasenia: ''
  };

  constructor(private autentificacion: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion():void{
    this.autentificacion.login(this.login.nombre,this.login.contrasenia).subscribe( data => {
                     console.log(data[0]);
                     if(data[0]){
                       if(data[0].tipoUsuarioId < 11){
                         console.log("Es usuario");
                       }else{
                         console.log("es administrador");
                       }
                       this.router.navigate(['/users']);
                     }else{
                       console.log("No existe un usuario con esos datos.");
                     }
    });
  }
}
