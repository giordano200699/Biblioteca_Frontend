import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilUsuarioComponent } from './components/perfilUsuario/perfilUsuario.component';
import { UserComponent } from './components/users/user.component';
import { UsersComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibroComponent } from './components/libros/libro.component';
import { LibroEditComponent } from './components/libros/libro-edit/libro-edit.component';
import { LibroProfileComponent } from './components/libros/libro-profile/libro-profile.component';
import { EditorialesComponent } from './components/editoriales/editoriales.component';
import { EditorialComponent } from './components/editoriales/editorial.component';
import { EditorialEditComponent } from './components/editoriales/editorial-edit/editorial-edit.component';
import { AutoresComponent } from './components/autores/autores.component';
import { AutorComponent } from './components/autores/autor.component';
import { AutorEditComponent } from './components/autores/autor-edit/autor-edit.component';
import { ListaPrestamosComponent } from './components/Administrador/listaPrestamos/listaPrestamos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PedidoProfileComponent } from './components/pedidos/pedido-profile/pedido-profile.component';
import { LibrosTemasComponent } from './components/Administrador/librosTemas/librosTemas.component';
import { EstadisticasComponent } from './components/Administrador/estadisticas/estadisticas.component';
import { SolicitadosComponent } from './components/pedidos/solicitados/solicitados.component';
import { PrestamosComponent } from './components/pedidos/prestamos/prestamos.component';
import { AuthGuard } from './_guards';

import { LoginFirebaseComponent } from './components/LoginFirebase/loginFirebase.component';
import { HistorialComponent } from './components/pedidos/prestamos/historial/historial.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'loginFirebase', component: LoginFirebaseComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'profile/:dni', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'update/:dni', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'libros', component: LibrosComponent, canActivate: [AuthGuard]},
  { path: 'libro/:id', component: LibroComponent, canActivate: [AuthGuard] },
  { path: 'profil/:id', component: LibroProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: LibroEditComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'editoriales', component: EditorialesComponent, canActivate: [AuthGuard]},
  { path: 'editorial/:id', component: EditorialComponent, canActivate: [AuthGuard] },
  { path: 'edita/:id', component: EditorialEditComponent, canActivate: [AuthGuard] },
  { path: 'autores', component: AutoresComponent, canActivate: [AuthGuard]},
  { path: 'autor/:id', component: AutorComponent, canActivate: [AuthGuard] },
  { path: 'editar/:id', component: AutorEditComponent, canActivate: [AuthGuard] },
  { path: 'administrador/prestamos', component: ListaPrestamosComponent , canActivate: [AuthGuard]},
  { path: 'administrador/libros/temas/:id', component: LibrosTemasComponent , canActivate: [AuthGuard]},
  { path: 'administrador/estadisticas', component: EstadisticasComponent , canActivate: [AuthGuard]},
  { path: 'pedidos', component: PedidosComponent, canActivate: [AuthGuard] },
  { path: 'prestamos', component: PrestamosComponent, canActivate: [AuthGuard] },
  { path: 'solicitados', component: SolicitadosComponent, canActivate: [AuthGuard] },
  { path: 'historial', component: HistorialComponent, canActivate: [AuthGuard] },
  { path: 'pedido/:id', component: PedidoProfileComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
