import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicioPanel', redirectTo:'', pathMatch : 'full'},
  { path: '',  component: InicioComponent, children: [
    { path: 'alumnos', loadChildren: () => import('../alumnos/alumnos.module').then((alumlazylo)=> alumlazylo.AlumnosModule)},
    { path: 'cursos', loadChildren: () => import('../cursos/cursos.module').then((curslazylo)=> curslazylo.CursosModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
