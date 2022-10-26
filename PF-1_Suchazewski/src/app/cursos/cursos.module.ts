import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursoGdComponent } from './components/curso-gd/curso-gd.component';
import { CursoAltaComponent } from './components/curso-gd/curso-new/curso-alta/curso-alta.component';
import { MaterialModule } from "../material.module";
import { CursosDataService } from './services/cursos-data.service';


@NgModule({
  declarations: [
    CursoGdComponent,
    CursoAltaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule
  ],
  providers:[
    CursosDataService
  ]
})
export class CursosModule { }
