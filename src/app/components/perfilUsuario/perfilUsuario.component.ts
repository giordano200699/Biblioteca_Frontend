import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { TipoUsuariosService } from '../../services/tipoUsuarios.service';

@Component({
  selector: 'app-perfilUsuario',
  templateUrl: './perfilUsuario.component.html'
})
export class PerfilUsuarioComponent implements OnInit {

  public autentificado;
  public tipoUsuario;

  constructor(private autentificacion: AuthenticationService, private tipoUsuariosService: TipoUsuariosService) { }

  ngOnInit() {
    this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
    console.log(JSON.parse(this.autentificacion.obtenerAutentificado()));
    console.log(this.autentificado.tipoUsuarioId);
    this.tipoUsuariosService.getTipoUsuario(this.autentificado.tipoUsuarioId)
    .subscribe( tipoUsuario1 => {
      this.tipoUsuario = tipoUsuario1[0];
      console.log(this.tipoUsuario);
    });
  }

}
