import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../../services/libros.service';

@Component({
  selector: 'app-libro-profile',
  templateUrl: './libro-profile.component.html',
  styles: []
})
export class LibroProfileComponent implements OnInit {

  libro: any[] = [];

  constructor(private librosService: LibrosService,
              private activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe( params => {

      this.getLibro( params['id'] );
      console.log('aca');

    });
  }
  ngOnInit() {
  }
  getLibro( id: string ) {

    this.librosService.getLibro( id )
    .subscribe( libro => {
      console.log(libro);
      this.libro = libro;
    });

  }

  mostrar() {
   console.log(this.libro);
  }
}
