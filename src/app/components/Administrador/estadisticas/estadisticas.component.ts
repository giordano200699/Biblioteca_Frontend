import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { PrestamosService } from '../../../services/prestamos.service';
import { PedidosService } from '../../../services/pedidos.service';
import { LibrosService } from '../../../services/libros.service';
import * as io from 'socket.io-client';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styles: []
})
export class EstadisticasComponent implements OnInit {

  public autentificado;
  idLibro;
  banderaTemas = true;
  temas = [];

  modelo = 1;

  title = 'Nº Préstamos';
   type = 'ColumnChart';
   data = [
      ["2012", 900],
      ["2013", 1000],
      ["2014", 1170],
      ["2015", 1250],
      ["2016", 1530]
   ];
   columnNames = ['Estudiante', 'Nº Préstamos'];
   options = {};
   width = 950;
   height = 400;

  constructor(private autentificacion: AuthenticationService,
    private prestamosService: PrestamosService,
    private pedidosService: PedidosService,
    private librosService: LibrosService,
    private activatedRoute: ActivatedRoute) {

      this.autentificado = JSON.parse(this.autentificacion.obtenerAutentificado());
      var socket = io();
  }
  ngOnInit() {
    
    this.obtenerGrafica();
  }

  obtenerGrafica(){
      var mithis = this;
      if(this.modelo==1){
        this.prestamosService.obtenerEstadistica()
        .subscribe(datos => {
            var nuevaData = [];
            for (let dato of datos){
                nuevaData.push([dato.apellidos,dato.cantidad]);
            }
            mithis.data = nuevaData;
            mithis.title = 'Nº Préstamos';
            mithis.columnNames = ['Estudiante', 'Nº Préstamos'];
            });
           
      }else if(this.modelo==2){
        this.pedidosService.obtenerEstadistica()
        .subscribe(datos => {
            var nuevaData = [];
            for (let dato of datos){
                nuevaData.push([dato.apellidos,dato.cantidad]);
            }
            mithis.data = nuevaData;
            mithis.title = 'Nº Pedidos';
            mithis.columnNames = ['Estudiante', 'Nº Pedidos'];
            });

      }else if(this.modelo==3){
        this.librosService.obtenerEstadistica()
        .subscribe(datos => {
            var nuevaData = [];
            for (let dato of datos){
                nuevaData.push([dato.titulo,dato.cantidad]);
            }
            mithis.data = nuevaData;
            mithis.title = 'Nº Préstamos';
            mithis.columnNames = ['Libro', 'Nº Préstamos'];
            });

      }
      
  }



}


