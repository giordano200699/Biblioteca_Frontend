import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../../services/libros.service';
import { ItemsService } from '../../../services/items.service';
import { Item } from '../../../interfaces/item.interface';
import { Pedido } from '../../../interfaces/pedido.interface';
import { AuthenticationService } from '../../../services/authentication.service';
import { PedidosService } from '../../../services/pedidos.service';

@Component({
  selector: 'app-pedido-profile',
  templateUrl: './pedido-profile.component.html',
  styles: []
})
export class PedidoProfileComponent implements OnInit {

  public autentificado;
  public dni;
  todolibro: any[] = [];
  libro: any[] = [];
  aux: any[] = [];
  autor;
  editorial;
  idLibro;
  p: number = 1;
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

  pedido: Pedido = {
    usuarioId: '',
    itemId: null,
    fechaInicio: new Date(),
    fechaFin: null,
    estado: 0,
    tipo: null
  }

  constructor(private librosService: LibrosService,
              private pedidosService: PedidosService,
              private itemsService: ItemsService,
              private activatedRoute: ActivatedRoute,
              private autentificacion: AuthenticationService) {

        this.activatedRoute.params.subscribe( params => {
          this.idLibro = params['id'];
          this.getLibro( params['id'] );
          this.itemsService.getItems( params['id']  )
          .subscribe(data => {
              this.items = data;
              console.log(this.items);
          });
        });
  }

  ngOnInit() {
    this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
    this.dni = this.autentificado.dni;
  }

  getLibro( id: string ) {
    this.librosService.getLibro( id )
    .subscribe( libro => {
      this.libro = libro;
    });

    this.librosService.getTodoLibros( id )
    .subscribe( todolibro => {
      this.todolibro = todolibro;
      console.log(this.todolibro);
      this.aux = this.todolibro['autores'];
      this.autor = this.aux[0].nombre;
      this.aux = this.todolibro['editoriales'];
      this.editorial = this.aux[0].nombre;
    });
  }

  modalBoton( item) {
    this.itemBoton = item;
  }
  guardar( itemId, tipo) {

    this.pedidosService.newPedido(this.autentificado.dni, itemId, tipo)
      .subscribe( data => {
      });
  }
}
