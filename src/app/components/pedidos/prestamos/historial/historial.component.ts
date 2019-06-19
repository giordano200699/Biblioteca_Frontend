import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';
import { PrestamosService } from '../../../../services/prestamos.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styles: []
})
export class HistorialComponent implements OnInit {
  public autentificado;
  public nombre;
  public id;
  prestamos: any[] = [];
  prestamosUsuario: any[] = [];
  p: number = 1;

  constructor(private autentificacion: AuthenticationService,
              private prestamosServices: PrestamosService,
              private router: Router) {
  }

  ngOnInit() {
    this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
    this.nombre = this.autentificado.nombres;
    this.id = this.autentificado.dni;
    this.prestamosServices.traerPrestamos(this.id)
    .subscribe( data => {
      this.prestamos = data;
      this.prestamos.sort(function (a, b) {
        if (a.pedidoId < b.pedidoId) {
          return 1;
        }
        if (a.pedidoId > b.pedidoId) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      console.log(this.prestamos);
      this.filtro();
    });
  }

  filtro() {
    this.prestamos.forEach(element => {
      if (element.estado === 2) {
        this.prestamosUsuario.push(element);
     }
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
