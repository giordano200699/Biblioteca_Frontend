import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { Pedido } from '../../../interfaces/pedido.interface';
import { PedidosService} from '../../../services/pedidos.service';
import { PrestamosService} from '../../../services/prestamos.service';
import { CastigosService} from '../../../services/castigos.service';
import { AuthenticationService } from '../../../services/authentication.service';
import * as io from 'socket.io-client';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listaPrestamos',
  templateUrl: './listaPrestamos.component.html',
  styles: []
})
export class ListaPrestamosComponent implements OnInit {

  pedidos:[];
  prestamos:[];
  public autentificado;
  contador=1;

  constructor(private autentificacion: AuthenticationService,
    private pedidosService: PedidosService,
    private prestamosService: PrestamosService,
    private castigosService: CastigosService) {

      this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
      this.pedidosService.getPedidos().subscribe( data => {
        this.pedidos = data;
      });
      this.prestamosService.getPrestamos().subscribe( data => {
        this.prestamos = data;
      });
  }
  ngOnInit() {
    const funcionPedidos = this.pedidosService;
    var mithis = this;
    if(this.contador==1){
      var socket = io();
      socket.on('pedido creado', function(msg){
        Swal.fire({
          title: 'Se ha pedido el libro '+msg.titulo+' ejemplar Nº'+msg.numeroCopia,
          animation: false,
          customClass: {
            popup: 'animated tada'
          }
        }).then((result)=>{
          funcionPedidos.getPedidos().subscribe( data => {
            mithis.pedidos = data;
          });
        });
      
      });
      this.contador++;
    }
  }

  imprimirFecha(cadena){
    
    var fecha = new Date(cadena);
    fecha.setTime( fecha.getTime() + 5 * 60 * 60 * 1000 );
    var resultado = '';
    resultado += fecha.getHours()+':'+fecha.getMinutes() +'  '+fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
    return resultado;
  }

  rechazar(pedido) {
    var fechaActualS = new Date();
    fechaActualS.setTime( fechaActualS.getTime() + -5 * 60 * 60 * 1000 );
    this.pedidosService.cancelarPedido(pedido.pedidoId,this.autentificado.dni,fechaActualS.toJSON()).subscribe( data => {
      this.pedidosService.getPedidos().subscribe( data => {
        this.pedidos = data;
      });
    });
  }

  aceptar(pedido) {
    var fechaActualS = new Date();
    fechaActualS.setTime( fechaActualS.getTime() + -5 * 60 * 60 * 1000 );
    this.pedidosService.aceptarPedido(pedido.pedidoId,this.autentificado.dni,fechaActualS.toJSON()).subscribe( data => {
      var fechaActual = new Date();
      fechaActual.setTime( fechaActual.getTime() + -5 * 60 * 60 * 1000 );
      var fechaSiguiente = new Date();
      fechaSiguiente.setTime( fechaSiguiente.getTime() + -5 * 60 * 60 * 1000 );
      if(fechaActual.getDay()==6){
        //Hoy es Sábado
        fechaSiguiente.setDate(fechaSiguiente.getDate() + 2);
      }else{
        fechaSiguiente.setDate(fechaSiguiente.getDate() + 1);
      }
      this.prestamosService.crearPrestamo(pedido.pedidoId,fechaActual.toJSON(),fechaSiguiente.toJSON()).subscribe( data => {
        this.pedidosService.getPedidos().subscribe( data => {
          this.pedidos = data;
        });
        this.prestamosService.getPrestamos().subscribe( data => {
          this.prestamos = data;
        });
      });
    });
  }

  recibir(prestamo){
    var fechaActualS = new Date();
    fechaActualS.setTime( fechaActualS.getTime() + -5 * 60 * 60 * 1000 );
    this.prestamosService.recibirPrestamo(prestamo.prestamoId,fechaActualS.toJSON(),this.autentificado.dni).subscribe( data => {
      this.prestamosService.getPrestamos().subscribe( data => {
        this.prestamos = data;
      });
    });
  }

  recibirCastigo(prestamo){
    this.castigosService.crearCastigo(prestamo.prestamoId).subscribe( data => {
      this.prestamosService.getPrestamos().subscribe( data => {
        this.prestamos = data;
      });
    });
  }

  //Esta funcion todavia no se presentara
  /*actualizar(prestamo){

  }*/
}


