import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {Autor} from '../interfaces/autor.interface';


@Injectable({providedIn: 'root'})

export class AutoresService {
  
  getautor: string = 'http://bibliotecabackend.herokuapp.com/autores?Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoYLnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaSYc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF36eiCuXJ3gkOfX8C4n';

  insautor: string = 'http://bibliotecabackend.herokuapp.com/autores?Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoYLnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaSYc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF36eiCuXJ3gkOfX8C4n';

  delautor: string = 'http://bibliotecabackend.herokuapp.com/autores';
  
  clave : string = 'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoYLnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaSYc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF36eiCuXJ3gkOfX8C4n';

  constructor( private http: Http,private router: Router) {
    console.log('Autor Service Listo');
  }

  getAutores() {
    return this.http.get(this.getautor)
        .pipe(map( res => res.json()));
  }
  
  newAutor(autor: Autor) {
    console.log(autor);
    const body = JSON.stringify( autor );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.insautor, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));

  }

  borrarAutor( id: string ) {
    console.log("Estas en el servicio");
    console.log(id);
    const url = `${ this.delautor }/${ id }?${ this.clave }`;
    return this.http.delete( url )
      .pipe(map( res => res.json()));
  }
}
