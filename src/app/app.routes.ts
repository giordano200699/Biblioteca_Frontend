import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {UserComponent} from './components/users/user.component';
import {UsersComponent} from './components/users/users.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'profile/:dni', component: UserProfileComponent },
  { path: 'update/:dni', component: UserEditComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
