import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { Pedido } from '../../../interfaces/pedido.interface';
import { PedidosService} from '../../../services/pedidos.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-listaPrestamos',
  templateUrl: './listaPrestamos.component.html',
  styles: []
})
export class ListaPrestamosComponent implements OnInit {

  pedidos:[];
  public autentificado;

  constructor(private autentificacion: AuthenticationService,
    private pedidosService: PedidosService) {

      this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
       this.pedidosService.getPedidos().subscribe( data => {
        this.pedidos = data;
      });
  }
  ngOnInit() {
  }

  rechazar(pedido) {
    this.pedidosService.cancelarPedido(pedido.pedidoId,this.autentificado.dni,new Date().toJSON()).subscribe( data => {
      alert("Se rechazo");
    });
  }

  aceptar(pedido) {
    this.pedidosService.aceptarPedido(pedido.pedidoId,this.autentificado.dni,new Date().toJSON()).subscribe( data => {
      alert("Se Acepto");
    });
  }
}


