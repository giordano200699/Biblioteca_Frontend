import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Cuenta } from '../../interfaces/cuenta.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


  login: Cuenta = {
    nombre : '',
    contrasenia: ''
  };

  public isError = false;

  constructor(private autentificacion: AuthenticationService,
              private router: Router,
              private ActivatedRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  iniciarSesion(): void {
    this.autentificacion.login(this.login.nombre, this.login.contrasenia).subscribe( data => {
                     console.log(data[0]);
                     if (data[0]) {
                       if (data[0].tipoUsuarioId < 11) {
                         console.log( 'Es usuario' );
                         this.router.navigate(['/pedidos']);
                         this.isError = false;
                       } else {
                         console.log('es administrador');
                         this.router.navigate(['/administrador/prestamos']);
                         this.isError = false;
                       }
                     } else {
                       console.log('No existe un usuario con esos datos.' );
                       this.isError = true;
                     }
                     this.isError = true;
    });
  }
}
