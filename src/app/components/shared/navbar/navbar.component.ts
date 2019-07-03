import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TipoUsuariosService } from '../../../services/tipoUsuarios.service';
import * as io from 'socket.io-client';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public autentificado;
  public tipoUsuario;
  public nombre;
  banderaPedidoRechazo = true;
  banderaPedidoAceptado = true;
  banderaPrestamoRecibido = true;

  constructor(public location: Location, private autentificacion: AuthenticationService, 
              private router: Router) { 
              }

  ngOnInit() {
    var mithis = this;
 
    if(this.banderaPedidoRechazo){
      var socket = io();
      socket.on('pedido rechazado', function(msg){
        if(msg.usuarioId == mithis.autentificado.dni){
          Swal.fire({
            title: 'Se ha rechazado tu pedido:\nTítulo: '+msg.titulo+'\nNº Ejemplar: '+msg.numeroCopia,
            animation: false,
            customClass: {
              popup: 'animated tada'
            }
          });
        }
      });
      this.banderaPedidoRechazo = false;
    }

    if(this.banderaPedidoAceptado){
      var socket = io();
      socket.on('pedido aceptado', function(msg){
        if(msg.usuarioId == mithis.autentificado.dni){
          Swal.fire({
            title: 'Se ha aceptado tu pedido:\nTítulo: '+msg.titulo+'\nNº Ejemplar: '+msg.numeroCopia,
            animation: false,
            customClass: {
              popup: 'animated tada'
            }
          });
        }
      });
      this.banderaPedidoAceptado = false;
    }

    if(this.banderaPrestamoRecibido){
      var socket = io();
      socket.on('prestamo finalizado', function(msg){
        if(msg.usuarioId == mithis.autentificado.dni){
          Swal.fire({
            title: 'Tu préstamo ha sido finalizado:\nTítulo: '+msg.titulo+'\nNº Ejemplar: '+msg.numeroCopia,
            animation: false,
            customClass: {
              popup: 'animated tada'
            }
          });
        }
      });
      this.banderaPrestamoRecibido = false;
    }
  }


  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if ( titlee === '/home' || titlee === '/login') {
        return true;
    } else {
        return false;
    }
  }
  isAdmin() {
    if (JSON.parse(this.autentificacion.obtenerAutentificado()).tipoUsuarioId >= 11) {
      return true;
    }
    return false;
  }
  isAlumno() {
    if (JSON.parse(this.autentificacion.obtenerAutentificado()).tipoUsuarioId < 11) {
      return true;
    }
    return false;
  }
  isLogin() {
    if (this.autentificacion.currentCuentaValue) {
      return true;
    }
    else {
      return false;
    }
  }
  estaLogueado(){
    if(this.autentificacion.obtenerAutentificado()){
      return true;
    }else{
      return false;
    }
  }
  dameNombre(){
    return JSON.parse(this.autentificacion.obtenerAutentificado()).nombres;
  }

  cerrarSesion(): void {
    console.log('cerrandoSesion');
    this.autentificacion.logout();
    this.router.navigate(['/home']);
  }
}
