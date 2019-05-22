import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { Autor } from '../../interfaces/autor.interface';
import { AutoresService} from '../../services/autores.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styles: []
})
export class AutorComponent implements OnInit {

  autor: Autor = {
    nombre: ''
  };
  id: string;
  constructor(private editorialesServic: AutoresService,
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
    console.log(this.autor);

    this.editorialesServic.newAutor( this.autor )
      .subscribe( data => {
      });
      this.limpiar();
  }

  private limpiar() {
    this.autor.nombre = '';
  }

}


