import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public autentificado;
  public nombre;
  libros: any[] = [];
  idLibro: string;
  filterName = '';

  constructor(private autentificacion: AuthenticationService,
              private librosService: LibrosService,
              private router: Router) {

            this.librosService.getLibros()
              .subscribe( data => {
                this.libros = data;
            });
  }

  ngOnInit() {
    this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
    this.nombre = this.autentificado.nombres;
  }

  mostrarLibro(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/pedido', this.idLibro]);
  }
}
