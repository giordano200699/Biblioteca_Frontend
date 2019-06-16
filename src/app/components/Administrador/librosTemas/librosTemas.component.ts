import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { TemasService} from '../../../services/temas.service';
import * as io from 'socket.io-client';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-librosTemas',
  templateUrl: './librosTemas.component.html',
  styles: []
})
export class LibrosTemasComponent implements OnInit {

  public autentificado;
  idLibro;
  banderaTemas = true;
  temas = [];

  constructor(private autentificacion: AuthenticationService,
    private temasService: TemasService,
    private activatedRoute: ActivatedRoute) {

      this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
      var socket = io();
      this.activatedRoute.params.subscribe( params => {
        this.idLibro = params['id'];
        console.log(this.idLibro);
        
      });
  }
  ngOnInit() {
    
    var mithis = this;
    this.temasService.obtenerRelacionesConLibro(parseInt(this.idLibro))
    .subscribe(data => {
        console.log(data)
        //this.items = data;
        if(data.length==0){
            mithis.banderaTemas = false;
        }else{
          console.log(data);
            mithis.temas = data.temas;
        }
    });
  }

  agregarTema(){
    this.banderaTemas = true;
      this.temas.push({
          nombre:'',
          peso:0
      })
  }
  eliminarTema(){
    this.temas.pop();
    }
    guardarCambios(){
      var bandera = true;
      for(let tema of this.temas){
        if(tema.nombre.length==0 || tema.peso.length==0){
          bandera = false;
        }
      }
      if(bandera){
        this.temasService.actualizarRelacionesConLibro(parseInt(this.idLibro),this.temas)
        .subscribe(data => {
          console.log(data)
          Swal.fire({
            type: 'success',
            title: 'Tarea realizada',
            text: 'Se han guardado los cambios.'
          })
      });
      }else{
        Swal.fire({
          type: 'error',
          title: 'Datos erróneos',
          text: 'Usted debe llenar todos los campos, y el peso debe ser un número entero.'
        })
      }
    }


}


