import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoGdComponent } from './components/curso-gd/curso-gd.component';

const routes: Routes = [
  { path: 'cursos', component: CursoGdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
