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

  constructor(public location: Location, private autentificacion: AuthenticationService, 
              private router: Router) { }

  ngOnInit() {
    this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
    this.tipoUsuario = this.autentificado.tipoUsuarioId;
    this.nombre = this.autentificado.nombres;
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
    if (this.tipoUsuario >= 11) {
      return true;
    }
    return false;
  }
  isAlumno() {
    if (this.tipoUsuario < 11) {
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

  cerrarSesion(): void {
    console.log('cerrandoSesion');
    this.autentificacion.logout();
    this.router.navigate(['/home']);
  }
}
