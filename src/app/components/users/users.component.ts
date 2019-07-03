import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  usuarioBoton;
  closeResult: string;
  filterName  = '';
  usuarios = [];
  pag: number = 1;

  constructor(private usersService: UsersService,
              private router: Router) {

    var mithis = this;
    this.usersService.getUsers()
        .subscribe( data => {
          this.users = data;
          mithis.usuarios = [...data];
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

  filtro() {
    this.vaciar();
    
    if (this.filterName === '' || this.filterName.length < 3) {
      return;
    }
    for (const usuario of this.users) {
      if (usuario.codigo.toLowerCase().indexOf(this.filterName.toLowerCase()) > -1) {
        this.usuarios.push(usuario);
      }
    }
  }
  vaciar() {
    while (this.usuarios.length > 0) {
      this.usuarios.pop();
    }
  }
  modalBoton(usuario) {
    this.usuarioBoton = usuario;
  }
}
