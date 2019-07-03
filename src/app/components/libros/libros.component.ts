import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { EditorialLibro } from '../../interfaces/editoriallibro.interface';
import { AutorLibro } from '../../interfaces/autorlibro.interface';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: []
})
export class LibrosComponent implements OnInit {

  libros: any[] = [];
  edilibros: any[] = [];
  autlibros: any[] = [];
  libroBoton;
  idLibro: string;
  editorialLibro: EditorialLibro;
  autorLibro: AutorLibro;
  filterName = '';
  lib = [];
  pag: number = 1;

  constructor(private librosService: LibrosService,
              private router: Router) {

    var mithis = this;
    this.librosService.getLibros()
        .subscribe( data => {
          mithis.libros = data;
          mithis.lib = [...data];
        });
  }

  ngOnInit() {
  }

  deleteLibro( id: number ) {
    console.log('esta eliminando');
    this.idLibro = id.toString();
    console.log(this.idLibro);
    // this.eliminarRelacion(this.idLibro);
    this.libroBoton = null;
    this.librosService.borrarLibro(this.idLibro)
      .subscribe( respuesta => {
          console.log(respuesta);
      });
  }

  eliminarRelacion(id: string) {
    this.librosService.getrelAutorLibro(id)
        .subscribe( data => {
          this.autlibros = data;
        });
    console.log(this.autlibros);
    this.librosService.getrelEditorialLibro(id)
        .subscribe( data => {
          this.edilibros = data;
        });
    console.log(this.edilibros);
    this.autlibros.forEach(aut => {
          console.log(aut);
      });
    this.edilibros.forEach(edi => {
        console.log(edi);
    });
  }

  editarLibro(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/edit', this.idLibro]);
  }

  mostrarTemas(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/administrador/libros/temas', this.idLibro]);
  }

  mostrarLibro(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/profil', this.idLibro]);
  }

  modalBoton(libro) {
    this.libroBoton = libro;
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
