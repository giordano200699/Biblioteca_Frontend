import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: any[] = [];

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
    this.usersService.borrarUser(dni)
      .subscribe( respuesta => {
          console.log(respuesta);
      });
  }

}
