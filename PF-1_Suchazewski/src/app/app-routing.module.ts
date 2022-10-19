import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlumnoGdComponent } from './Componentes/gestionDatos/alumno-gd/alumno-gd.component';

const routes: Routes = [
  //aca asigno ruteo
  { path: 'alumnos', component: AlumnoGdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
