import { editorialesService } from '../../services/editoriales.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/interfaces/editorial.interface';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit {
  editoriales: any[] = [];
  editorialBoton;
  idEditorial: string;

  constructor(private editorialesServic: editorialesService,
              private router: Router) {

    this.editorialesServic.getEditoriales()
    .subscribe( data => {
      this.editoriales = data;
    });
  }

  ngOnInit() {
  }

  deleteEditorial( id: number ) {
    console.log('esta eliminando');
    this.idEditorial = id.toString();
    console.log(this.idEditorial);
    this.editorialBoton = null;
    this.editorialesServic.borrarEditorial(this.idEditorial)
    .subscribe( respuesta => {
    console.log(respuesta);
    });
  }
  
  editarEditorial(id: number) {
    this.idEditorial = id.toString();
    this.router.navigate(['/edita', this.idEditorial]);
  }
  
  mostrarEditorial(id: number) {
    this.idEditorial = id.toString();
    this.router.navigate(['/profil', this.idEditorial]);
  }
  modalBoton(libro) {
    this.editorialBoton = libro;
  }
}