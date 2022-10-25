import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoGdComponent } from './alumnos/components/alumno-gd/alumno-gd.component';
import { CursoGdComponent } from './Componentes/gestionDatos/curso-gd/curso-gd.component';

const routes: Routes = [
  //aca asigno ruteo
  /* { path: '', component: AlumnoGdComponent }, */
  { path: 'alumnos', component: AlumnoGdComponent },
  { path: 'cursos', component: CursoGdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
