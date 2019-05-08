import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Autenticar } from '../../interfaces/Autenticar.interface';
import { UsersService } from '../../services/users.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  login: Autenticar = {
    nombre : '',
    contrasenia: ''
  };

  id: string;

  constructor( private usersService: UsersService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) {

        this.activatedRoute.params.subscribe(parametros => {
                console.log(parametros);
                this.id = parametros['id'];

            });

  }

  ngOnInit() {
  }

  IniciarSesion(){
    console.log(this.login);
    this.usersService.autentificar( this.login ).subscribe( data => {
                   console.log(data[0].codigo);
                   console.log(data[0].apellidos);
                   console.log(data[0].correoInstitucional);
          if(data[0].tipoUsuarioId < 11){
                 console.log("Es usuario");
            this.router.navigate(['/perfil']);
          }else{
            this.router.navigate(['/users']);
            
          }
      });
  }

}
