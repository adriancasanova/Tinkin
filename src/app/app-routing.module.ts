import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditarRecetaComponent } from './componentes/editar-receta/editar-receta.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevaRecetaComponent } from './componentes/nueva-receta/nueva-receta.component';
import { PanelUsuarioComponent } from './componentes/panel-usuario/panel-usuario.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VerRecetaComponent } from './componentes/ver-receta/ver-receta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'usuario', component: PanelUsuarioComponent }, 
  { path: 'editar-receta', component: EditarRecetaComponent }, 
  { path: 'nueva-receta', component: NuevaRecetaComponent }, 
  { path: 'ver-receta', component: VerRecetaComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'registro', component: RegistroComponent }, 
 /* { path: 'admin', component: AdminComponent, canActivate:[GuardGuard]}, */
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
