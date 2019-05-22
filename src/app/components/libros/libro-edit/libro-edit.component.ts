import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../../services/libros.service';
import { Libro } from '../../../interfaces/libro.interface';

@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styles: []
})
export class LibroEditComponent implements OnInit {

  libro = [];

  constructor(private librosService: LibrosService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) {

    this.activatedRoute.params.subscribe( params => {

      this.getLibro( params['id'] );

    });
  }

  ngOnInit() {
  }

  getLibro( id: string ) {
    console.log(id);
    this.librosService.getLibro( id )
    .subscribe( libro => {
      console.log(libro);
      this.libro = libro[0];
    });

  }

  mostrar() {
   console.log(this.libro);
  }

  guardar() {
    console.log(this.libro);

    this.librosService.updateLibro( this.libro )
      .subscribe( data => {
      });
  }
}
