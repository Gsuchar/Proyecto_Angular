import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionGdComponent } from './components/inscripcion-gd/inscripcion-gd.component';
import { InscripcionAltaComponent } from './components/inscripcion-gd/inscripcion-new/inscripcion-alta/inscripcion-alta.component';


@NgModule({
  declarations: [
    InscripcionGdComponent,
    InscripcionAltaComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule { }
