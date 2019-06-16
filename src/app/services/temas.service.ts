import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { User } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  clave: string = '?Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';

  // tslint:disable-next-line:no-inferrable-types
  temasLibrosURL: string = 'http://bibliotecabackend.herokuapp.com/temas/libros';
  temasActualizarURL: string = 'http://bibliotecabackend.herokuapp.com/temas/relacionarLibro'

  constructor( private http: Http, private router: Router) {
    console.log('Servicio de Temas Listo');
  }


  obtenerRelacionesConLibro(id:number) {
    return this.http.get(this.temasLibrosURL+'/'+id+this.clave)
        .pipe(map( res => res.json()));
  }

  actualizarRelacionesConLibro(idLibro, arreglo){
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put( this.temasActualizarURL+this.clave,
        {
            libroId:idLibro,
            temas:arreglo

        },
        {headers}
    )
    .pipe(map( res => {
        console.log(res.json());
        return res.json();
    }));
  }
}
