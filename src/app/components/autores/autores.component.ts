import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../../services/autores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores: any[] = [];
  autorBoton;
  idAutor: string;

  constructor(private autoresService: AutoresService,
              private router: Router) {

    this.autoresService.getAutores()
        .subscribe( data => {
          this.autores = data;
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
}

