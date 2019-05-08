import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuariosService {
  constructor( private http: Http) {
    console.log('Servicio Tipo de Usuarios Listo');
  }

  getTipoUsuario(id) {
    return this.http.get("https://bibliotecabackend.herokuapp.com/tipoUsuarios/"+id+"?clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoYLnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaSYc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF36eiCuXJ3gkOfX8C4n")
      .pipe(map( res => res.json()));
  }
}
