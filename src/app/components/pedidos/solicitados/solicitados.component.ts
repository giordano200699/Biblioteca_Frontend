import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { PedidosService } from '../../../services/pedidos.service';

@Component({
  selector: 'app-solicitados',
  templateUrl: './solicitados.component.html',
  styleUrls: ['./solicitados.component.css']
})
export class SolicitadosComponent implements OnInit {

  public autentificado;
  public nombre;
  public id;
  pedidos: any[] = [];
  pedidosUsuario: any[] = [];

  constructor(private autentificacion: AuthenticationService,
              private pedidosServices: PedidosService,
              private router: Router) {
  }

  ngOnInit() {
    this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
    this.nombre = this.autentificado.nombres;
    this.id = this.autentificado.dni;
    this.pedidosServices.traerPedidos(this.id)
                .subscribe( data => {
                  this.pedidosUsuario = data;
                  console.log(this.pedidosUsuario);
                });
  }

  imprimirFecha(cadena){
    var fecha = new Date(cadena);
    fecha.setTime( fecha.getTime() + 5 * 60 * 60 * 1000 );
    var resultado = '';
    resultado += fecha.getHours()+':'+fecha.getMinutes() +'  '+fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
    return resultado;
  }

}
