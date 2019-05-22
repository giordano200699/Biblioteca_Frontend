import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Autor } from '../interfaces/autor.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  autoresURL: string = 'https://bibliotecabackend.herokuapp.com/autores?' +
                      'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                      'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                      'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                      '6eiCuXJ3gkOfX8C4n';

  clave: string = 'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';

  autorURL: string = 'https://bibliotecabackend.herokuapp.com/autores';

  constructor(private http: Http, private router: Router) {
    console.log('Servicio autor Listo');
  }

  newAutor(autor: Autor) {
    console.log(autor);
    const body = JSON.stringify( autor );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.autoresURL, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  updateAutor(autor) {
    console.log(autor);

    const body = JSON.stringify( autor );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    const url =  `${ this.autorURL }/${ autor.autorId }?${ this.clave }`;
    return this.http.put( url, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  getAutores() {

    return this.http.get(this.autoresURL)
        .pipe(map( res => res.json()));
  }

  getAutor( id: string ) {
    const url =  `${ this.autorURL }/${ id }?${ this.clave }`;
    return this.http.get(url)
      .pipe(map( res => res.json()));
  }


  borrarAutor( id: string ) {
    const url =  `${ this.autorURL }/${ id }?${ this.clave }`;
    return this.http.delete( url )
      .pipe(map( res => res.json()));
  }
}
