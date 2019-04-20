import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { User } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersURL: string = 'https://bibliotecabackend.herokuapp.com/usuarios?' +
                      'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                      'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                      'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                      '6eiCuXJ3gkOfX8C4n';

<<<<<<< HEAD
  clave: string = 'clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';
=======
  usersURL:string = "https://bibliotecabackend.herokuapp.com/usuarios?Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoYLnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaSYc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF36eiCuXJ3gkOfX8C4n"
>>>>>>> 13b839d7d6eb890ae3db20c5f822c79129fa4015

  // tslint:disable-next-line:no-inferrable-types
  userURL: string = 'https://bibliotecabackend.herokuapp.com/usuarios';

  constructor( private http: Http) {
    console.log('User Service Listo');
  }

  newUser(user: User) {

    const body = JSON.stringify( user );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.usersURL, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));

  }
  updateUser(user: User) {

    const body = JSON.stringify( user );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put( this.usersURL, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  getUsers() {

    return this.http.get(this.usersURL)
        .pipe(map( res => res.json()));
  }

  getUser( dni: string ) {
    const url = `${ this.userURL }/${ dni }?${ this.clave }`;
    return this.http.get(url)
      .pipe(map( res => res.json()));
  }


  borrarUser( dni: string ) {
    const url = `${ this.userURL }/${ dni }?${ this.clave }`;
    return this.http.delete( url )
      .pipe(map( res => res.json()));
  }
}
