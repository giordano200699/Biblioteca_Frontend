import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { Editorial } from '../../interfaces/editorial.interface';
import { editorialesService} from '../../services/editoriales.service';
@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styles: []
})
export class EditorialComponent implements OnInit {

  editorial: Editorial = {
    nombre: ''
  };
  id: string;
  constructor(private editorialesServic: editorialesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params
              .subscribe(parametros => {
                  console.log(parametros);
                  this.id = parametros['id'];
              });
  }
  ngOnInit() {
  }

  guardar() {
    console.log(this.editorial);

    this.editorialesServic.newEditorial( this.editorial )
      .subscribe( data => {
      });
    this.limpiar();
  }

  private limpiar() {
    this.editorial.nombre = '';
  }

}


