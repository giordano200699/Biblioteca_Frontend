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
import { AuthGuard } from './_guards';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'user/:id', component: UserComponent },
  { path: 'profile/:dni', component: UserProfileComponent },
  { path: 'update/:dni', component: UserEditComponent },
  { path: 'perfil', component: PerfilUsuarioComponent },
  { path: 'libros', component: LibrosComponent, canActivate: [AuthGuard]},
  { path: 'libro/:id', component: LibroComponent },
  { path: 'profil/:id', component: LibroProfileComponent },
  { path: 'edit/:id', component: LibroEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editoriales', component: EditorialesComponent, canActivate: [AuthGuard]},
  { path: 'editorial/:id', component: EditorialComponent },
  { path: 'edita/:id', component: EditorialEditComponent },
  { path: 'autores', component: AutoresComponent, canActivate: [AuthGuard]},
  { path: 'autor/:id', component: AutorComponent },
  { path: 'editar/:id', component: AutorEditComponent },
  { path: 'administrador/prestamos', component: ListaPrestamosComponent , canActivate: [AuthGuard]},
  { path: 'pedidos', component: PedidosComponent, canActivate: [AuthGuard] },
  { path: 'pedido/:id', component: PedidoProfileComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
