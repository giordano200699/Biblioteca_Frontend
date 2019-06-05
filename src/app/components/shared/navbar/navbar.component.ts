import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TipoUsuariosService } from '../../../services/tipoUsuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public autentificado;
  public tipoUsuario;
  public nombre;

  constructor(public location: Location, private autentificacion: AuthenticationService, 
              private router: Router) { }

  ngOnInit() {
    this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
    this.tipoUsuario = this.autentificado.tipoUsuarioId;
    this.nombre = this.autentificado.nombres;
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
