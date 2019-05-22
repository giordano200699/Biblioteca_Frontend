import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { AutoresService} from '../../../services/autores.service';

@Component({
  selector: 'app-autor-edit',
  templateUrl: './autor-edit.component.html',
  styles: []
})
export class AutorEditComponent implements OnInit {

  autor = [];

  constructor(private autoresServic: AutoresService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) {

          this.activatedRoute.params.subscribe(params => {
            this.getAutor( params['id'] );
          });
      }

  ngOnInit() {
  }

  getAutor(id: string) {
    console.log(id);
    this.autoresServic.getAutor( id )
    .subscribe( editorial => {
      console.log(editorial);
      this.autor = editorial[0];
    });

  }
  mostrar() {
    console.log(this.autor);
   }

  guardar() {
     console.log(this.autor);
     this.autoresServic.updateAutor( this.autor )
       .subscribe( data => {
       });
  }

}
