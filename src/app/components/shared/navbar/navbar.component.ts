import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(public location: Location, private autentificacion: AuthenticationService, 
              private router: Router) { }

  ngOnInit() {
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if ( titlee === '/home' || titlee === '/login') {
        return true;
    }
    else {
        return false;
    }
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
