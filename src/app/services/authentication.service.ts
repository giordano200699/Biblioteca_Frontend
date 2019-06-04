import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cuenta } from '../interfaces/cuenta.interface';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    cuental: any;
    private currentCuentaSubject: BehaviorSubject<Cuenta>;
    public currentCuenta: Observable<Cuenta>;

    constructor(private http: HttpClient) {
        this.currentCuentaSubject = new BehaviorSubject<Cuenta>(JSON.parse(localStorage.getItem('currentCuenta')));
        this.currentCuenta = this.currentCuentaSubject.asObservable();
    }

    public get currentCuentaValue(): Cuenta {
        return this.currentCuentaSubject.value;
    }

    login(nombre: string, contrasenia: string) {
        return this.http.post<any>(`https://bibliotecabackend.herokuapp.com/usuarios/esUsuario?Content-Type=application/json&clave=QDm6pbKeVwWikPvpMSUYwp0tNnxcaLoYLnyvLQ4ISV39uQOgsjTEjS0UNlZHwbxl2Ujf30S31CSKndwpkFeubt5gJHTgFlq7LeIaSYc0jNm44loPty2ZK1nI0qisrt2Xwq0nFhdp8H3kdpyL5wVZLH7EpSE6IO0cHAOGOfSpJjF36eiCuXJ3gkOfX8C4n`, { nombre, contrasenia })
            .pipe(map(cuenta => {
                // login successful if there's a jwt token in the response
                if (cuenta && cuenta[0]._id) {
                    localStorage.setItem('currentCuenta', JSON.stringify(cuenta[0]));
                    this.currentCuentaSubject.next(cuenta[0]);
                }
                this.cuental = cuenta[0];
                return cuenta;
            }));
    }

    cuenta() {
        return this.cuental;
    }

    logout() {
        localStorage.removeItem('currentCuenta');
        this.currentCuentaSubject.next(null);
    }

    obtenerAutentificado(){
        return localStorage.getItem('currentCuenta');
    }
}
