import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Prestamo } from '../interfaces/prestamo.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  clave: string = '?Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';


  pedidoURLCrear:string = 'http://bibliotecabackend.herokuapp.com/prestamos';
  pedidoURLObtener:string = 'http://bibliotecabackend.herokuapp.com/prestamos/activos';
  pedidoURLRecibir:string = 'http://bibliotecabackend.herokuapp.com/prestamos/recibir';
  prestamosUsuario:string = 'http://bibliotecabackend.herokuapp.com/prestamos/usuario/';
  estadisticaURL:string = 'http://bibliotecabackend.herokuapp.com/prestamos/estadistica';
  id: string;

  constructor(private http: Http, private router: Router) {
    console.log('Servicio de Préstamos Listo.');
  }

  getPrestamos() {
    return this.http.get(this.pedidoURLObtener+this.clave)
        .pipe(map( res => res.json()));
  }

  traerPrestamos(id) {
    console.log(this.prestamosUsuario+id+this.clave);
    return this.http.get(this.prestamosUsuario+id+this.clave)
        .pipe(map( res => res.json()));
  }

  crearPrestamo(pedidoId,fechaInicio,fechaFin){

    const headers =  new  Headers({
        'Content-Type': 'application/json'
    });

    return this.http.post( this.pedidoURLCrear+this.clave,
        {
            pedidoId:pedidoId,
            fechaInicio:fechaInicio,
            fechaFin: fechaFin,
            estado: 1

        },
        {headers}
    )
    .pipe(map( res => {
        console.log(res.json());
        return res.json();
    }));
  }

  recibirPrestamo(prestamoId,fechaDevolucion,adminId){
    const headers =  new  Headers({
        'Content-Type': 'application/json'
    });

    return this.http.post( this.pedidoURLRecibir+'/'+prestamoId+this.clave,
        {
            fechaDevolucion:fechaDevolucion,
            estado:2,
            adminId: adminId
        },
        {headers}
    )
    .pipe(map( res => {
        console.log(res.json());
        return res.json();
    }));
  }

  obtenerEstadistica(mes,anio){
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.estadisticaURL+this.clave,
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
