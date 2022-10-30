import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
//import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from "../material.module";



@NgModule({
  declarations: [
    //LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
