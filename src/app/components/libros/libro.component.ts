import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { Libro } from '../../interfaces/libro.interface';
import { Autor } from '../../interfaces/autor.interface';
import { AutorLibro } from '../../interfaces/autorlibro.interface';
import { Editorial } from '../../interfaces/editorial.interface';
import { LibrosService } from '../../services/libros.service';
import { AutoresService } from '../../services/autores.service';
import { editorialesService } from '../../services/editoriales.service';
import { EditorialLibro } from '../../interfaces/editoriallibro.interface';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styles: []
})
export class LibroComponent implements OnInit {

  autores: Autor [] = [];
  editoriales: Editorial [] = [];
  idlibro: number;
  idautor: number;
  ideditorial: number;
  editorialLibro: EditorialLibro = {
    libroId: null,
    editorialId: null
  };
  autorLibro: AutorLibro = {
    libroId: null,
    autorId: null
  };
  libro: Libro = {
    titulo: '',
    tituloSecundario: '',
    clasificacion: '',
    anio: null,
    edicion: null,
    resumen: '',
    capitulos : '',
    isbn : '',
    extension : null,
    observaciones: '',
    dimensiones : '',
    acompaniamiento: '',
    palabrasClaves : '',
    tomo: null,
    libroId: null
  };

  id: string;
  constructor(private librosService: LibrosService,
              private autoresService: AutoresService,
              private editorialeService: editorialesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params
              .subscribe(parametros => {
                  console.log(parametros);
                  this.id = parametros['id'];
              });
        this.autoresService.getAutores()
            .subscribe( data => {
              this.autores = data;
            });
        this.editorialeService.getEditoriales()
            .subscribe( data => {
              this.editoriales = data;
            });

  }
  ngOnInit() {
  }

  guardar() {

    this.librosService.newLibro( this.libro )
      .subscribe( data => {
        this.idlibro = data.libroId;
        console.log(this.idlibro);
        this.relacionar();
      });
    this.limpiar();
  }

  relacionar() {

    this.autorLibro.autorId = this.idautor;
    this.autorLibro.libroId = this.idlibro;
    this.editorialLibro.editorialId = this.ideditorial;
    this.editorialLibro.libroId = this.idlibro;
    console.log(this.autorLibro);
    console.log(this.editorialLibro);
    this.librosService.relacionAutorLibro( this.autorLibro )
      .subscribe( data => {
      });

    this.librosService.relacionEditorialLibro( this.editorialLibro )
      .subscribe( data => {
      });
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
