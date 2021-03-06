import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { User } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersURL: string = 'http://bibliotecabackend.herokuapp.com/usuarios?' +
                      'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                      'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                      'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                      '6eiCuXJ3gkOfX8C4n';

  clave: string = 'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';

  // tslint:disable-next-line:no-inferrable-types
  userURL: string = 'http://bibliotecabackend.herokuapp.com/usuarios';
  tipoURL: string = 'http://bibliotecabackend.herokuapp.com/tipoUsuarios';

  constructor( private http: Http, private router: Router) {
    console.log('User Service Listo');
  }

  newUser(user: User) {
    console.log(user);
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
  updateUser(user) {
    console.log(user);

    const body = JSON.stringify( user );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    const url = `${ this.userURL }/${user.dni}?${ this.clave }`;
    return this.http.put( url, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  getUsers() {

    return this.http.get(this.usersURL)
        .pipe(map( res => res.json()));
  }

  getTiposU() {
    const url = `${ this.tipoURL }?${ this.clave }`;
    return this.http.get(url)
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
