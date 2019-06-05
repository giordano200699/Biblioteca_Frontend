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
    this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
    this.dni = this.autentificado.dni;
  }

  getLibro( id: string ) {

    this.librosService.getLibro( id )
    .subscribe( libro => {
      console.log(libro);
      this.libro = libro;
    });
  }

  modalBoton( item) {
    this.itemBoton = item;
  }
  guardar( itemId, tipo) {

    this.pedidosService.newPedido(this.autentificado.dni, itemId,tipo)
      .subscribe( data => {
      });
  }
}
