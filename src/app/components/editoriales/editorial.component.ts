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

  editorial: editorial = {
    nombre: ''
  };

  constructor(private editorialesServic: editorialesService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) {
      }

  ngOnInit() {
  }

  guardar() {
    console.log("AQUIIIIIIIIIIIIII");
    console.log(this.editorial);

    this.editorialesServic.neweditorial( this.editorial)
      .subscribe( data => {
      });
      this.limpiar();
  }

  private limpiar() {
    this.editorial.nombre = ''
  }

}


