import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarHeaderComponent } from "./layout/toolbar-header/toolbar-header.component";
import { SideMenuComponent } from "./layout/side-menu/side-menu.component";
import { MainHomeComponent } from "./layout/main-home/main-home.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosModule } from "./alumnos/alumnos.module";
import { CursosModule } from "./cursos/cursos.module";
import { LoginModule } from "./login/login.module";


@NgModule({
  declarations: [
    AppComponent,
    ToolbarHeaderComponent,
    SideMenuComponent,
    MainHomeComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CursosModule,
    AlumnosModule,
    LoginModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
