import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo:'inicio', pathMatch : 'full'},
 /*  { path: 'inicio',  component: InicioComponent  }, */
  { path: 'inicio',  component: InicioComponent, children: [
    { path: 'alumnos', loadChildren: () => import('../alumnos/alumnos.module').then((alumlazylo)=> alumlazylo.AlumnosModule)},
    { path: 'cursos', loadChildren: () => import('../cursos/cursos.module').then((curslazylo)=> curslazylo.CursosModule)},
  ]}


  //LazyLoad
  /* { path: 'alumnos', loadChildren: () => import('../alumnos/alumnos.module').then((alumlazylo)=> alumlazylo.AlumnosModule) },
  { path: 'cursos', loadChildren: () => import('../cursos/cursos.module').then((curslazylo)=> curslazylo.CursosModule) } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
