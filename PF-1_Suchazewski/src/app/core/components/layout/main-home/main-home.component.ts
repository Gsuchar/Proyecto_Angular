import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { SesionUserService } from 'src/app/core/services/sesion-user.service';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent {
  //Datos Sesion
  sesionUser$!: Observable<Sesion>;
  //Valor si es sesion de Admin
  sesionAdmin!: boolean | undefined;
  sesionUserName!: string | undefined
  constructor(
    private sesionUserService: SesionUserService,
    private router: Router,
  ) {
    //Armo valores para limitar visual segun sea admin o no
    this.sesionUser$ = this.sesionUserService.obtenerSesion();
    /* this.sesionUser$.subscribe(evt => console.log('valorSesionActiva$ >>>> '+evt.sesionActiva)) */
    this.sesionUser$.pipe(
      map(valorSesionAdmin=>valorSesionAdmin.sesionUsuario?.userAdmin)
    ).subscribe( admin => this.sesionAdmin = admin ).unsubscribe()
    this.sesionUser$.pipe(
      map(userName=>userName.sesionUsuario?.userName)
    ).subscribe( user => this.sesionUserName = user ).unsubscribe()
  }
}
