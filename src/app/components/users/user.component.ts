import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  user: User = {
    dni: '',
    nombres: '',
    apellidos: '',
    edad: null,
    sexo: false,
    estado: 0,
    codigo: '',
    correoInstitucional : '',
    correoPersonal : '',
    escuelaId : '',
    telefonoCasa : '',
    telefonoMovil : '',
    direccion : '',
    imagenId: '5cb20994a56d852ce808ca51',
    contrasenia: '',
    tipoUsuarioId: 1
  };

  id: string;

  constructor( private usersService: UsersService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) {

        this.activatedRoute.params
            .subscribe(parametros => {
                console.log(parametros);
                this.id = parametros['id'];

            });

  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.user);

    this.usersService.newUser( this.user )
      .subscribe( data => {
      });
      this.limpiar();
  }

  private limpiar() {
    this.user.dni = '',
    this.user.nombres = '',
    this.user.apellidos = '',
    this.user.edad = null,
    this.user.sexo = false,
    this.user.estado = 0,
    this.user.codigo = '',
    this.user.correoInstitucional = '',
    this.user.correoPersonal = '',
    this.user.escuelaId = '',
    this.user.telefonoCasa = '',
    this.user.telefonoMovil = '',
    this.user.direccion = '',
    this.user.imagenId = 'http://i63.tinypic.com/14xfdx4.jpg',
    this.user.contrasenia = '';
  }

}
