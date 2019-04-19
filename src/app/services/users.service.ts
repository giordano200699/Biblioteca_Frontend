import { Injectable } from '@angular/core';
import { Http , Headers} from "@angular/http";
import { User } from "../interfaces/user.interface";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersURL:string = "https://bibliotecabackend.herokuapp.com/usuarios?Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoYLnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaSYc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF36eiCuXJ3gkOfX8C4n"

  constructor( private http:Http) { }

  newUser (user:User){

    let body = JSON.stringify( user );
    let headers =  new  Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.usersURL, body, { headers } )
        .pipe(map( res=>{
          console.log(res.json());
          return res.json();
        }))

  }
  updateUser (user:User){

    let body = JSON.stringify( user );
    let headers =  new  Headers({
      'Content-Type':'application/json'
    });

    return this.http.put( this.usersURL, body, { headers } )
        .pipe(map( res=>{
          console.log(res.json());
          return res.json();
        }))

  }

  getUsers(){

    return this.http.get(this.usersURL)
        .pipe(map( res=>res.json()));
  }

  getUser( _id:string ){
    let url = `${ this.usersURL }/${ _id }.json`;
    return this.http.get(url)
      .pipe(map( res=>res.json()));
  }
}
