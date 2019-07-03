import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { PedidosService } from '../../services/pedidos.service';
import { AutoresService } from '../../services/autores.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public autentificado;
  public nombre;
  libros: any[] = [];
  cantLibros;
  pagina:1;
  rango = [];
  lib: any[] = [];
  aux: any[] = [];
  autor: any[] = [];
  idautor: number;
  idAutor: string;
  pag: number = 1;
  idLibro: string;
  filterName = '';

  constructor(private autentificacion: AuthenticationService,
              private librosService: LibrosService,
              private pedidosService: PedidosService,
              private autoresService: AutoresService,
              private router: Router) {

          //       var mithis = this;
          //   this.librosService.getLibrosPag(1,"").subscribe( data => {
          //     console.log(data);
          //     mithis.libros = data.resultado;
          // });
  }

  ngOnInit() {
    this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
    this.nombre = this.autentificado.nombres;
  }
  mostrarLibro(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/pedido', this.idLibro]);
  }

  filtro(pag) {
    var mithis = this;
      this.librosService.getLibrosPag(pag,this.filterName).subscribe( data => {
          console.log(data);
          mithis.libros = data.resultado;
          mithis.pagina = pag;
          if(data.cantLibros%10==0){
            mithis.cantLibros = data.cantLibros/10;
          }else{
            mithis.cantLibros = (data.cantLibros-data.cantLibros%10)/10 +1;
          }
      });
  }

  tecla(evento){
    if(evento.key=="Enter"){
      var mithis = this;
      this.librosService.getLibrosPag(1,this.filterName).subscribe( data => {
          console.log(data);
          mithis.libros = data.resultado;
          mithis.pagina = 1;
          if(data.cantLibros%10==0){
            mithis.cantLibros = data.cantLibros/10;
          }else{
            mithis.cantLibros = (data.cantLibros-data.cantLibros%10)/10 +1;
          }
          mithis.rango = [];
          for(var i = 1;i<=mithis.cantLibros;i++){
            mithis.rango.push(i);
          }
      });
    }
  }

  vaciar() {
    while (this.lib.length > 0) {
      this.lib.pop();
    }
  }
}
