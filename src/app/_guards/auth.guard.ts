import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentCuenta = this.authenticationService.currentCuentaValue;
        if (currentCuenta) {
            // logged in so return true
            const autentificado = JSON.parse(this.authenticationService.obtenerAutentificado());
            const ruta = route.routeConfig.path;
            if(autentificado.tipoUsuarioId < 11){
                //Es usuario
                if(ruta == "administrador/estadisticas" ||
                ruta == "administrador/libros/temas/:id"||
                ruta == "administrador/prestamos"||
                ruta == "users"||
                ruta == "profile/:dni"||
                ruta == "update/:dni"||
                ruta == "user/:id"||
                ruta == "libros"||
                ruta == "libro/:id"||
                ruta == "profil/:id"||
                ruta == "edit/:id"||
                ruta == "editoriales"||
                ruta == "editorial/:id"||
                ruta == "edita/:id"||
                ruta == "autores"||
                ruta == "autor/:id"||
                ruta == "editar/:id"){

                    this.router.navigate(['/pedidos'], { queryParams: { returnUrl: state.url } });
                    return false;
                }else{
                    return true;
                }
            }else{
                //Es administrador
                if(ruta == "pedidos"||
                ruta == "solicitados"||
                ruta == "prestamos"||
                ruta == "historial"||
                ruta == "pedido/:id"){
                    this.router.navigate(['/administrador/prestamos'], { queryParams: { returnUrl: state.url } });
                    return false;
                }else{
                    return true;
                }
            }
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}