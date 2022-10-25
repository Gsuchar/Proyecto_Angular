import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoGdComponent } from "./components/alumno-gd/alumno-gd.component";
import { AlumnoAltaComponent } from "./components/alumno-gd/alumno-new/alumno-alta/alumno-alta.component";
import { alumnosDataService } from "./services/alumnosData.service";
import { MaterialModule } from '../material.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
//REVISAR
import { MatTableFilterModule } from 'mat-table-filter'



@NgModule({
  declarations: [
    AlumnoGdComponent,
    AlumnoAltaComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    //revisar
    MatTableFilterModule
  ],
  providers:[
    alumnosDataService
  ]
})
export class AlumnosModule { }
