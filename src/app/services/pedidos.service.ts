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

  pedidoURLSolo:string = 'https://bibliotecabackend.herokuapp.com/pedidos/activos';
  pedidoURL: string = 'https://bibliotecabackend.herokuapp.com/pedidos';
  pedidoURLCancelar:string = 'https://bibliotecabackend.herokuapp.com/pedidos/cancelar';
  pedidoURLAceptar:string = 'https://bibliotecabackend.herokuapp.com/pedidos/aceptar';
  id: string;

  constructor(private http: Http, private router: Router) {
    console.log('Servicio de Pedidos Listo.');
  }

  getPedidos() {
    return this.http.get(this.pedidoURLSolo+this.clave)
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

  newPedido(pedido: Pedido) {
    const body = JSON.stringify( pedido );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    const url =  `${ this.pedidoURL }${ this.clave }`;
    return this.http.post( url , body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

}
