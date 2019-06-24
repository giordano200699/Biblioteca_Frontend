import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { Autor } from '../../interfaces/autor.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores: Autor[] = [];
  autorBoton;
  idAutor: string;
  filterName = '';
  auto: any[] = [];
  pag: number = 1;

  constructor(private autoresService: AutoresService,
              private router: Router) {

    this.autoresService.getAutores()
        .subscribe( data => {
          this.autores = data;
          this.auto = [...data];
        });
  }

  ngOnInit() {
  }

  deleteAutor( id: number ) {
    console.log('esta eliminando');
    this.idAutor = id.toString();
    console.log(this.idAutor);
    this.autorBoton = null;
    this.autoresService.borrarAutor(this.idAutor)
      .subscribe( respuesta => {
          console.log(respuesta);
      });
  }

  editarAutor(id: number) {
    this.idAutor = id.toString();
    this.router.navigate(['/editar', this.idAutor]);
  }
/*
  mostrarAutor(id: number) {
    this.idAutor = id.toString();
    this.router.navigate(['/profil', this.idAutor]);
  }*/
  modalBoton(autor) {
    this.autorBoton = autor;
  }

  filtro() {
    this.vaciar();
    if (this.filterName === '' || this.filterName.length < 3) {
      return;
    }
    for (const autor of this.autores) {
      if (autor.nombre.toLowerCase().indexOf(this.filterName.toLowerCase()) > -1) {
        this.auto.push(autor);
      }
    }
  }

  vaciar() {
    while (this.auto.length > 0) {
      this.auto.pop();
    }
  }
}

