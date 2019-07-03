import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { PedidosService } from '../../services/pedidos.service';
import { AutoresService } from '../../services/autores.service';
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
  lib: any[] = [];
  aux: any[] = [];
  autor: any[] = [];
  idautor: number;
  idAutor: string;
  pag: number = 1;
  idLibro: string;
  filterName = '';

  constructor(private autentificacion: AuthenticationService,
              private librosService: LibrosService,
              private pedidosService: PedidosService,
              private autoresService: AutoresService,
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

  filtro() {
    this.vaciar();
    if (this.filterName === '' || this.filterName.length < 3) {
      return;
    }
    for (const libro of this.libros) {
      if (libro.titulo.toLowerCase().indexOf(this.filterName.toLowerCase()) > -1) {
        this.lib.push(libro);
      }
    }
  }

  vaciar() {
    while (this.lib.length > 0) {
      this.lib.pop();
    }
  }
}
