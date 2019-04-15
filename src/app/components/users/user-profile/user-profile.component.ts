import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute } from "@angular/router";
import { User } from "../../../interfaces/user.interface";
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  user:any ={};
  loadingUser :boolean;
  id:string;
  constructor( private _usersService: UsersService,
               private router:Router,
               private activatedRoute:ActivatedRoute ) {

        this.activatedRoute.params
            .subscribe(parametros=>{
                this.id = parametros['_id'];
            })
        this.loadingUser = true;
        this._usersService.getUser( this.id )
                .subscribe( data =>{
                  console.log(data);
                  this.user = data;
                  this.loadingUser = false;

                })
  }

  ngOnInit() {
  }

  Mostrar(){
    console.log(this.id);
    this._usersService.getUser( this.id)
      .subscribe( data=>{
      })
  }
}
