import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarHeaderComponent } from "./Componentes/layout/toolbar-header/toolbar-header.component";
import { SideMenuComponent } from "./Componentes/layout/side-menu/side-menu.component";
import { MainHomeComponent } from "./Componentes/layout/main-home/main-home.component";
import { CursoGdComponent } from "./Componentes/gestionDatos/curso-gd/curso-gd.component";
import { CursoAltaComponent } from './Componentes/gestionDatos/curso-gd/curso-new/curso-alta/curso-alta.component';
import { AlumnoGdComponent } from "./Componentes/gestionDatos/alumno-gd/alumno-gd.component";
import { AlumnoAltaComponent } from "./Componentes/gestionDatos/alumno-gd/alumno-new/alumno-alta/alumno-alta.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarHeaderComponent,
    SideMenuComponent,
    MainHomeComponent,
    CursoGdComponent,
    CursoAltaComponent,
    AlumnoGdComponent,
    AlumnoAltaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
