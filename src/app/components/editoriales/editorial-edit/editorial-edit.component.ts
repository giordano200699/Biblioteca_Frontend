import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { Editorial } from '../../../interfaces/editorial.interface';
import { editorialesService} from '../../../services/editoriales.service';

@Component({
  selector: 'app-editorial-edit',
  templateUrl: './editorial-edit.component.html',
  styles: []
})
export class EditorialEditComponent implements OnInit {

  editorial = [];

  constructor(private editorialesServic: editorialesService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) {

          this.activatedRoute.params.subscribe(params => {
            this.getEditorial( params['id'] );
          });
      }

  ngOnInit() {
  }

  getEditorial(id: string) {
    console.log(id);
    this.editorialesServic.getEditorial( id )
    .subscribe( editorial => {
      console.log(editorial);
      this.editorial = editorial[0];
    });

  }
  mostrar() {
    console.log(this.editorial);
   }

  guardar() {
     console.log(this.editorial);
     this.editorialesServic.updateEditorial( this.editorial )
       .subscribe( data => {
       });
  }

}

