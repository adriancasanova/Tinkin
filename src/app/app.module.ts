import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AsideComponent } from './componentes/aside/aside.component';
import { SectionComponent } from './componentes/section/section.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { PanelUsuarioComponent } from './componentes/panel-usuario/panel-usuario.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditarRecetaComponent } from './componentes/editar-receta/editar-receta.component';
import { NuevaRecetaComponent } from './componentes/nueva-receta/nueva-receta.component';
import { VerRecetaComponent } from './componentes/ver-receta/ver-receta.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceJsService } from './servicios/service-js.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    SectionComponent,
    TablaComponent,
    PanelUsuarioComponent,
    HomeComponent,
    EditarRecetaComponent,
    NuevaRecetaComponent,
    VerRecetaComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ServiceJsService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
