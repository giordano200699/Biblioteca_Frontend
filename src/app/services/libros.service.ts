import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Libro } from '../interfaces/libro.interface';
import { AutorLibro } from '../interfaces/autorlibro.interface';
import { EditorialLibro } from '../interfaces/editoriallibro.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  librosURL: string = 'http://bibliotecabackend.herokuapp.com/libros?' +
                      'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                      'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                      'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                      '6eiCuXJ3gkOfX8C4n';

  clave: string = 'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';

  libroURL: string = 'http://bibliotecabackend.herokuapp.com/libros';
  todoLibroURL: string = 'https://bibliotecabackend.herokuapp.com/libros/todo';
  estadisticaURL: string = 'http://bibliotecabackend.herokuapp.com/libros/estadistica';

  id: string;

  constructor(private http: Http, private router: Router) {
    console.log('Servicio Libro Listo');
  }

  newLibro(libro: Libro) {
    console.log(libro);
    const body = JSON.stringify( libro );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.librosURL, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }
  updateLibro(libro) {
    console.log(libro);

    const body = JSON.stringify( libro );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    const url =  `${ this.libroURL }/${ libro.libroId }?${ this.clave }`;
    return this.http.put( url, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  getLibros() {

    return this.http.get(this.librosURL)
        .pipe(map( res => res.json()));
  }

  getLibrosPag(pag,busqueda){
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.libroURL+'/paginadoF/'+pag+'?'+this.clave, {
      "busqueda":busqueda
    }, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  getTodoLibros(id: string) {
    const url = `${ this.todoLibroURL }/${ id }?${ this.clave }`;
    console.log(url);
    return this.http.get(url)
        .pipe(map( res => res.json()));
  }

  getLibro( id: string ) {
    const url =  `${ this.libroURL }/${ id }?${ this.clave }`;
    return this.http.get(url)
      .pipe(map( res => res.json()));
  }

  relacionAutorLibro(autorLibro: AutorLibro) {
    console.log(autorLibro);
    const body = JSON.stringify( autorLibro );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    const url =  `${ this.libroURL }/autores/${ autorLibro.libroId }/${ autorLibro.autorId }?${ this.clave }`;
    return this.http.post( url, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  relacionEditorialLibro(editorialLibro: EditorialLibro) {
    console.log(editorialLibro);
    const body = JSON.stringify( editorialLibro );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    const url =  `${ this.libroURL }/editoriales/${ editorialLibro.libroId }/${ editorialLibro.editorialId }?${ this.clave }`;
    return this.http.post( url, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  getrelAutorLibro(id: string) {
    const url =  `${ this.libroURL }/autores/${ id }?${ this.clave }`;
    console.log(url);
    return this.http.get(url)
    .pipe(map( res => res.json()));
  }

  getrelEditorialLibro(id: string) {
    const url =  `${ this.libroURL }/editoriales/${ id }?${ this.clave }`;
    console.log(url);
    return this.http.get(url)
    .pipe(map( res => res.json()));
  }

  borrarLibro( id: string ) {
    const url =  `${ this.libroURL }/${ id }?${ this.clave }`;
    return this.http.delete( url )
      .pipe(map( res => res.json()));
  }

  obtenerEstadistica(mes, anio){
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.estadisticaURL+'?'+this.clave,
        {
          mes:mes,
          anio:anio
        },
        {headers}
    )
    .pipe(map( res => {
        console.log(res.json());
        return res.json();
    }));
  }
}
