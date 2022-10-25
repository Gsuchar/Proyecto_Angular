import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarHeaderComponent } from "./layout/toolbar-header/toolbar-header.component";
import { SideMenuComponent } from "./layout/side-menu/side-menu.component";
import { MainHomeComponent } from "./layout/main-home/main-home.component";
import { CursoGdComponent } from "./Componentes/gestionDatos/curso-gd/curso-gd.component";
import { CursoAltaComponent } from './Componentes/gestionDatos/curso-gd/curso-new/curso-alta/curso-alta.component';
/* import { AlumnoGdComponent } from "./Componentes/gestionDatos/alumno-gd/alumno-gd.component";
import { AlumnoAltaComponent } from "./Componentes/gestionDatos/alumno-gd/alumno-new/alumno-alta/alumno-alta.component"; */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlumnosModule } from "./alumnos/alumnos.module";





@NgModule({
  declarations: [
    AppComponent,
    ToolbarHeaderComponent,
    SideMenuComponent,
    MainHomeComponent,
    CursoGdComponent,
    CursoAltaComponent,
   /*  AlumnoGdComponent,
    AlumnoAltaComponent, */




  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
