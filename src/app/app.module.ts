import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
// Routes
import { APP_ROUTING } from './app.routes';
// Services
import { UsersService } from './services/users.service';
import { LibrosService } from './services/libros.service';
import { AutoresService } from './services/autores.service';
import { editorialesService } from './services/editoriales.service';
import { ItemsService } from './services/items.service';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilUsuarioComponent } from './components/perfilUsuario/perfilUsuario.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { KeysPipe } from './pipes/keys.pipe';
import { LibrosComponent } from './components/libros/libros.component';
import { LibroComponent } from './components/libros/libro.component';
import { LibroEditComponent } from './components/libros/libro-edit/libro-edit.component';
import { LibroProfileComponent } from './components/libros/libro-profile/libro-profile.component';
import { EditorialesComponent } from './components/editoriales/editoriales.component';
import { AutoresComponent } from './components/autores/autores.component';
import { EditorialComponent } from './components/editoriales/editorial.component';
import { EditorialEditComponent } from './components/editoriales/editorial-edit/editorial-edit.component';
import { AutorComponent } from './components/autores/autor.component';
import { AutorEditComponent } from './components/autores/autor-edit/autor-edit.component';
import { ItemsComponent } from './components/libros/items/items.component';
import { ListaPrestamosComponent } from './components/Administrador/listaPrestamos/listaPrestamos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PedidoProfileComponent } from './components/pedidos/pedido-profile/pedido-profile.component';

import { LoginFirebaseComponent } from './components/LoginFirebase/loginFirebase.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    PerfilComponent,
    PerfilUsuarioComponent,
    UsersComponent,
    UserComponent,
    UserProfileComponent,
    UserEditComponent,
    KeysPipe,
    LibrosComponent,
    LibroComponent,
    LibroEditComponent,
    LibroProfileComponent,
    EditorialesComponent,
    AutoresComponent,
    EditorialComponent,
    EditorialEditComponent,
    AutorComponent,
    AutorEditComponent,
    ItemsComponent,
    ListaPrestamosComponent,
    PedidosComponent,
    PedidoProfileComponent,
    LoginFirebaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UsersService,
    LibrosService,
    editorialesService,
    AutoresService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
