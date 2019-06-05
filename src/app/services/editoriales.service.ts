import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {Editorial} from '../interfaces/editorial.interface';


@Injectable({providedIn: 'root'})

export class editorialesService {
  editorialesURL: string = 'http://bibliotecabackend.herokuapp.com/editoriales?' +
                      'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                      'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                      'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                      '6eiCuXJ3gkOfX8C4n';

  clave: string = 'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';

  editorialURL: string = 'http://bibliotecabackend.herokuapp.com/editoriales';

  constructor(private http: Http, private router: Router) {
    console.log('Servicio Editorial Listo');
  }

  newEditorial(editorial: Editorial) {
    console.log(editorial);
    const body = JSON.stringify( editorial );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.editorialesURL, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  updateEditorial(editorial) {
    console.log(editorial);

    const body = JSON.stringify( editorial );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    const url =  `${ this.editorialURL }/${ editorial.editorialId }?${ this.clave }`;
    return this.http.put( url, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  getEditoriales() {

    return this.http.get(this.editorialesURL)
        .pipe(map( res => res.json()));
  }

  getEditorial( id: string ) {
    const url =  `${ this.editorialURL }/${ id }?${ this.clave }`;
    return this.http.get(url)
      .pipe(map( res => res.json()));
  }


  borrarEditorial( id: string ) {
    const url =  `${ this.editorialURL }/${ id }?${ this.clave }`;
    return this.http.delete( url )
      .pipe(map( res => res.json()));
  }
}
