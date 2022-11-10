import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';

const routes: Routes = [
  { path: 'inicioPanel',  redirectTo:'', pathMatch : 'full', },
  { path: '',  component: InicioComponent, canActivate : [AutenticacionGuard]   , children: [
    { path: 'alumnos', loadChildren: () => import('../alumnos/alumnos.module').then((alumlazylo)=> alumlazylo.AlumnosModule)},
    { path: 'cursos', loadChildren: () => import('../cursos/cursos.module').then((curslazylo)=> curslazylo.CursosModule)},
    { path: 'inscripciones', loadChildren: () => import('../inscripciones/inscripciones.module').then((userlazylo)=> userlazylo.InscripcionesModule)},
    { path: 'usuarios', loadChildren: () => import('../usuarios/usuarios.module').then((userlazylo)=> userlazylo.UsuariosModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
