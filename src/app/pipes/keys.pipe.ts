import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const libros = [];
    for (const libro of value) {
      if (libro.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        libros.push(libro);
      };
    };
    return libros;
  }


}
