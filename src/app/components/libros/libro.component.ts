import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { Libro } from '../../interfaces/libro.interface';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styles: []
})
export class LibroComponent implements OnInit {

  libro: Libro = {
    titulo: '',
    tituloSecundario: '',
    clasificacion: '',
    anio: null,
    edicion: null,
    resumen: '',
    capitulos: '',
    isbn: '',
    extension: null,
    observaciones: '',
    dimensiones: '',
    acompaniamiento: '',
    palabrasClaves: '',
    tomo: null
  };

  id: string;
  constructor(private usersService: LibrosService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params
              .subscribe(parametros => {
                  console.log(parametros);
                  this.id = parametros['id'];
              });
  }
  ngOnInit() {
  }

  guardar() {
    console.log(this.libro);

    this.usersService.newLibro( this.libro )
      .subscribe( data => {
      });
      this.limpiar();
  }

  private limpiar() {
    this.libro.titulo =  '',
    this.libro.tituloSecundario = '',
    this.libro.clasificacion = '',
    this.libro.anio = null,
    this.libro.edicion = null,
    this.libro.resumen = '',
    this.libro.capitulos = '',
    this.libro.isbn = '',
    this.libro.extension = null,
    this.libro.observaciones = '',
    this.libro.dimensiones = '',
    this.libro.acompaniamiento = '',
    this.libro.palabrasClaves = '',
    this.libro.tomo = null;
  }

}
