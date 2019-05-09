import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user.interface';
import { TipoUsuariosService } from '../../../services/tipoUsuarios.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  user = [];
  usuario: User = {
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
  constructor( private usersService: UsersService,
               private activatedRoute: ActivatedRoute,private router: Router ) {

    this.activatedRoute.params.subscribe( params => {

      this.getUser( params['dni'] );

    });
  }

  ngOnInit() {

  }

  getUser( dni: string ) {

    this.usersService.getUser( dni )
    .subscribe( user => {
      console.log(user);
      this.user = user[0];
    });

  }

  mostrar() {
   console.log(this.user);
  }

  guardar() {
    console.log(this.user);

    this.usersService.updateUser( this.user )
      .subscribe( data => {
      });
  }

}
