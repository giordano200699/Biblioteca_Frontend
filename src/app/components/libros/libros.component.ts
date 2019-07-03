import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { EditorialLibro } from '../../interfaces/editoriallibro.interface';
import { AutorLibro } from '../../interfaces/autorlibro.interface';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: []
})
export class LibrosComponent implements OnInit {

  
  libros: any[] = [];
  cantLibros;
  pagina:1;
  rango = [];
  edilibros: any[] = [];
  autlibros: any[] = [];
  libroBoton;
  idLibro: string;
  editorialLibro: EditorialLibro;
  autorLibro: AutorLibro;
  filterName = '';
  lib = [];
  pag: number = 1;

  constructor(private librosService: LibrosService,
              private router: Router) {

  }

  ngOnInit() {
  }

  deleteLibro( id: number ) {
    console.log('esta eliminando');
    this.idLibro = id.toString();
    console.log(this.idLibro);
    // this.eliminarRelacion(this.idLibro);
    this.libroBoton = null;
    
    var mithis = this;
    this.librosService.borrarLibro(this.idLibro)
      .subscribe( respuesta => {
          this.librosService.getLibrosPag(mithis.pagina,this.filterName).subscribe( data => {
              console.log(data);
              mithis.libros = data.resultado;
              if(data.cantLibros%10==0){
                mithis.cantLibros = data.cantLibros/10;
              }else{
                mithis.cantLibros = (data.cantLibros-data.cantLibros%10)/10 +1;
              }
          });
      });
  }

  eliminarRelacion(id: string) {
    this.librosService.getrelAutorLibro(id)
        .subscribe( data => {
          this.autlibros = data;
        });
    console.log(this.autlibros);
    this.librosService.getrelEditorialLibro(id)
        .subscribe( data => {
          this.edilibros = data;
        });
    console.log(this.edilibros);
    this.autlibros.forEach(aut => {
          console.log(aut);
      });
    this.edilibros.forEach(edi => {
        console.log(edi);
    });
  }

  editarLibro(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/edit', this.idLibro]);
  }

  mostrarTemas(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/administrador/libros/temas', this.idLibro]);
  }

  mostrarLibro(id: number) {
    this.idLibro = id.toString();
    this.router.navigate(['/profil', this.idLibro]);
  }

  modalBoton(libro) {
    this.libroBoton = libro;
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
