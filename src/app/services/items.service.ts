import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Item } from '../interfaces/item.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  clave: string = 'Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoY' +
                  'LnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaS' +
                  'Yc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF3' +
                  '6eiCuXJ3gkOfX8C4n';

  itemURL: string = 'https://bibliotecabackend.herokuapp.com/libros/items';

  constructor(private http: Http, private router: Router) {
    console.log('Servicio Libro Listo');
  }

  newItem(item: Item) {
    console.log(item);
    const body = JSON.stringify( item );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    const url =  `${ this.itemURL }/${ item.libroId }?${ this.clave }`;
    return this.http.post( url, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  updateItem(item) {
    console.log(item);

    const body = JSON.stringify( item );
    const headers =  new  Headers({
      'Content-Type': 'application/json'
    });
    const url =  `${ this.itemURL }/${ item.libroId }/${ item.numeroCopia }??${ this.clave }`;
    return this.http.put( url, body, { headers } )
        .pipe(map( res => {
          console.log(res.json());
          return res.json();
        }));
  }

  deleteItem( item: Item ) {
    const url =  `${ this.itemURL }/${ item.libroId }/${ item.numeroCopia }?${ this.clave }`;
    return this.http.delete( url )
      .pipe(map( res => res.json()));
  }

  getItems( id: string ) {
    const url =  `${ this.itemURL }/${ id }?${ this.clave }`;
    return this.http.get(url)
        .pipe(map( res => res.json()));
  }

}

