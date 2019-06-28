import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user.interface';
import { TipoU } from '../../../interfaces/tipou.interface';
import { TipoUsuariosService } from '../../../services/tipoUsuarios.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  tipos: TipoU[] = [];
  user: User;

  constructor( private usersService: UsersService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) {

    this.activatedRoute.params.subscribe( params => {

      this.getUser( params['dni'] );

    });

    this.usersService.getTiposU()
            .subscribe( data => {
              this.tipos = data;
            });
  }

  ngOnInit() {

  }

  getUser( dni: string ) {

    this.usersService.getUser( dni )
    .subscribe( user => {
      console.log(user);
      this.user = user;
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
