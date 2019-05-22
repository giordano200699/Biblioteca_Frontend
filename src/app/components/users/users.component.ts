import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  usuarioBoton;
  closeResult: string;

  constructor(private usersService: UsersService,
              private router: Router) {

    this.usersService.getUsers()
        .subscribe( data => {
          this.users = data;
        });
  }

  ngOnInit() {
  }

  deleteUser( dni: string ) {
    console.log('esta eliminando');
    this.usuarioBoton = null;
    this.usersService.borrarUser(dni)
      .subscribe( respuesta => {
          console.log(respuesta);
      });
  }

  modalBoton(usuario) {
    this.usuarioBoton = usuario;
  }
}
