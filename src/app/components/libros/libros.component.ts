import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Router } from '@angular/router';
import { log } from 'util';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: []
})
export class LibrosComponent implements OnInit {

  libros: any[] = [];
  libroBoton;
  idLibro: string;

  constructor(private librosService: LibrosService,
              private router: Router) {

    this.librosService.getLibros()
        .subscribe( data => {
          this.libros = data;
        });
  }

  ngOnInit() {
  }

  deleteLibro( id: number ) {
    console.log('esta eliminando');
    this.idLibro = id.toString();
    console.log(this.idLibro);
    this.libroBoton = null;
    this.librosService.borrarLibro(this.idLibro)
      .subscribe( respuesta => {
          console.log(respuesta);
      });
  }

  editarLibro(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/edit', this.idLibro]);
  }

  mostrarLibro(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/profil', this.idLibro]);
  }
  modalBoton(libro) {
    this.libroBoton = libro;
  }
}
