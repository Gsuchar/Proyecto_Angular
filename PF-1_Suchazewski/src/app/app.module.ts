import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
/* import { LoginComponent } from './login/components/login/login.component'; */
import { CoreModule } from "./core/core.module";
import { LoginComponent } from './login/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent



  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CoreModule,




  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
