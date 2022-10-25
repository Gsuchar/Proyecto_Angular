import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoGdComponent } from './components/alumno-gd/alumno-gd.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnoGdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
