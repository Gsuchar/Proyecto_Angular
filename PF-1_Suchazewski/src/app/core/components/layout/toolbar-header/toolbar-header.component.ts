import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionUserService } from 'src/app/core/services/sesion-user.service';

@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.css']
})
export class ToolbarHeaderComponent implements OnInit {
  sesionUser$!: Observable<Sesion>;
  constructor(
    private sesionUserService: SesionUserService,
  ){
    this.sesionUser$ = this.sesionUserService.obtenerSesion();
  }

  ngOnInit(): void {
  }

}
