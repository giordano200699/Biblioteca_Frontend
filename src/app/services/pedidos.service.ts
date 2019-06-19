import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Pedido } from '../interfaces/pedido.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  clave: string = '?Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';

  pedidoURLSolo:string = 'http://bibliotecabackend.herokuapp.com/pedidos/activos';
  pedidoURL: string = 'http://bibliotecabackend.herokuapp.com/pedidos';
  pedidoURLCancelar:string = 'http://bibliotecabackend.herokuapp.com/pedidos/cancelar';
  pedidoURLAceptar:string = 'http://bibliotecabackend.herokuapp.com/pedidos/aceptar';
  pedidoUsuario:string = 'http://bibliotecabackend.herokuapp.com/pedidos/usuario/';
  estadisticaURL: string = 'http://bibliotecabackend.herokuapp.com/pedidos/estadistica';
  id: string;

  constructor(private http: Http, private router: Router) {
    console.log('Servicio de Pedidos Listo.');
  }

  getPedidos() {
    return this.http.get(this.pedidoURLSolo+this.clave)
        .pipe(map( res => res.json()));
  }

  traerPedidos(id) {
    console.log(this.pedidoUsuario+id+this.clave);
    return this.http.get(this.pedidoUsuario+id+this.clave)
        .pipe(map( res => res.json()));
  }

  cancelarPedido(idPedido,idAdministrador,fechaFinal){

    const headers =  new  Headers({
        'Content-Type': 'application/json'
    });

    return this.http.post( this.pedidoURLCancelar+'/'+idPedido+this.clave,
        {
            estado:0,
            adminId:idAdministrador,
            fechaFin: fechaFinal

        },
        {headers}
    )
    .pipe(map( res => {
        console.log(res.json());
        return res.json();
    }));
  }

  aceptarPedido(idPedido,idAdministrador,fechaFinal){

    const headers =  new  Headers({
        'Content-Type': 'application/json'
    });

    return this.http.post( this.pedidoURLAceptar+'/'+idPedido+this.clave,
        {
            estado:2,
            adminId:idAdministrador,
            fechaFin: fechaFinal

        },
        {headers}
    )
    .pipe(map( res => {
        console.log(res.json());
        return res.json();
    }));
  }

  newPedido(usuarioId, itemId,tipo) {
    var fechaActualS = new Date();
    fechaActualS.setTime( fechaActualS.getTime() + -5 * 60 * 60 * 1000 );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.pedidoURL+this.clave,
        {
            "usuarioId": usuarioId,
            "itemId": itemId,
            "fechaInicio": fechaActualS.toJSON(),
            "estado": 1,
            "tipo": tipo

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
