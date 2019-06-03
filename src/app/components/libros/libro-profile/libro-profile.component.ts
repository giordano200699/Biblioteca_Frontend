import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../../services/libros.service';
import { ItemsService } from '../../../services/items.service';
import { Item } from '../../../interfaces/item.interface';

@Component({
  selector: 'app-libro-profile',
  templateUrl: './libro-profile.component.html',
  styles: []
})
export class LibroProfileComponent implements OnInit {

  libro: any[] = [];
  items: any[] = [];
  itemBoton: Item = {
    numeroIngreso: '',
    codigoBarra: '',
    numeroCopia: null,
    volumen: null,
    modoAdquisicion: '',
    fuenteAdquisicion : '',
    precioAdquisicion : '',
    fechaAdquisicion: '',
    disponibilidad : null,
    tipoImpresion: null,
    lugarPublicacion : '',
    standId: null,
    itemId: null,
    libroId: null
  };
  idLibro;
  item: Item = {
    numeroIngreso: '',
    codigoBarra: '',
    numeroCopia: null,
    volumen: null,
    modoAdquisicion: '',
    fuenteAdquisicion : '',
    precioAdquisicion : '',
    fechaAdquisicion: '',
    disponibilidad : null,
    tipoImpresion: null,
    lugarPublicacion : '',
    standId: null,
    itemId: null,
    libroId: null
  };

  constructor(private librosService: LibrosService,
              private itemsService: ItemsService,
              private activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe( params => {
      this.idLibro = params['id'];
      console.log(this.idLibro);
      this.getLibro( params['id'] );
      console.log('aca');
      this.itemsService.getItems( params['id']  )
      .subscribe(data => {
        this.items = data;
      });
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
  guardar() {
    this.item.libroId = this.idLibro;
    console.log(this.item);
    this.itemsService.newItem( this.item )
      .subscribe( data => {
        console.log(data);
      });
    this.limpiar();
  }
  editar() {
    console.log(this.itemBoton);
    this.itemsService.updateItem( this.itemBoton )
      .subscribe( data => {
        console.log(data);
      });
    this.limpiar();
  }

  eliminarItem() {
    this.itemsService.deleteItem(this.itemBoton)
      .subscribe( data => {
      });
  }
  modalBoton( item) {
    this.itemBoton = item;
  }

  mostrar() {
   console.log(this.libro);
  }

   private limpiar() {
    this.item.numeroIngreso =  '',
    this.item.codigoBarra = '',
    this.item.numeroCopia = null,
    this.item.volumen = null,
    this.item.modoAdquisicion = '',
    this.item.fuenteAdquisicion = '',
    this.item.precioAdquisicion = '',
    this.item.fechaAdquisicion = '',
    this.item.disponibilidad = null,
    this.item.tipoImpresion = null,
    this.item.lugarPublicacion = '',
    this.item.standId = null;
  }
}
