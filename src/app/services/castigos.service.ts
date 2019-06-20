import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Castigo } from '../interfaces/castigo.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CastigosService {

  clave: string = '?Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';


  castigoURLCrear:string = 'http://bibliotecabackend.herokuapp.com/castigos';
  id: string;

  constructor(private http: Http, private router: Router) {
    console.log('Servicio de Castigos Listo.');
  }

  crearCastigo(prestamoId){
    const headers =  new  Headers({
        'Content-Type': 'application/json'
    });

    return this.http.post( this.castigoURLCrear+this.clave,
        {
            prestamoId: prestamoId
        },
        {headers}
    )
    .pipe(map( res => {
        console.log(res.json());
        return res.json();
    }));
  }
}
