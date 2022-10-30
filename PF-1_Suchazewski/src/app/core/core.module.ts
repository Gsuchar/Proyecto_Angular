import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { ToolbarHeaderComponent } from './components/layout/toolbar-header/toolbar-header.component';
import { SideMenuComponent } from './components/layout/side-menu/side-menu.component';
import { MainHomeComponent } from './components/layout/main-home/main-home.component';
import { MaterialModule } from "../material.module";

@Injectable({
  providedIn: 'root',
  })
@NgModule({
  declarations: [
    InicioComponent,
    ToolbarHeaderComponent,
    SideMenuComponent,
    MainHomeComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ]
})
export class CoreModule { }
