import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { ToolbarHeaderComponent } from './layout/toolbar-header/toolbar-header.component';
import { LoginComponent } from './login/components/login/login.component';



const routes: Routes = [
  //aca asigno ruteo
  { path: '',  /* component: LoginComponent */  },
  { path: 'inicio',  },
  { path: '',  component: ToolbarHeaderComponent, },
  //LazyLoad
  { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then((alumlazylo)=> alumlazylo.AlumnosModule) },
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then((curslazylo)=> curslazylo.CursosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
