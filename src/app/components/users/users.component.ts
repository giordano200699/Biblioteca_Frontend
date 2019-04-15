import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users:any[] = [];

  constructor(private _usersService:UsersService) {

    this._usersService.getUsers()
        .subscribe( data =>{

          // console.log(data);
          for(let key$ in data ){
            // console.log( data[key$] );
            this.users.push( data[key$] );
          }

        })
  }

  ngOnInit() {
  }

}
