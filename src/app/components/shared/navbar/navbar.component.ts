import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private autentificacion: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  cerrarSesion():void{
    console.log("cerrandoSesion");
    this.autentificacion.logout();
    this.router.navigate(['/login']);
  }
}
