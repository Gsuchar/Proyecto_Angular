import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SesionUserService } from 'src/app/core/services/sesion-user.service';
import { Sesion } from 'src/app/core/models/sesion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  //Datos Sesion
  sesionUser$!: Observable<Sesion>;
  //Valor si es sesion de Admin
  sesionAdmin!: boolean | undefined;
  sesionUserName!: string | undefined
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(
    private breakpointObserver: BreakpointObserver,
    //Consumo servicio global de sesion
    private sesionUserService: SesionUserService,
    private router: Router,
    ) {
      //Armo valores para limitar visual segun sea admin o no
      this.sesionUser$ = this.sesionUserService.obtenerSesion();
      this.sesionUser$.pipe(
        map(valorSesionAdmin=>valorSesionAdmin.sesionUsuario?.userAdmin)
      ).subscribe( admin => this.sesionAdmin = admin ).unsubscribe()
      this.sesionUser$.pipe(
        map(userName=>userName.sesionUsuario?.userName)
      ).subscribe( user => this.sesionUserName = user ).unsubscribe()
    }

    logOut(){
      alert("Saldra del sistema, sera dirigido al Login"),
      this.sesionUserService.logOut(),
      this.sesionUser$.subscribe(evt => evt.sesionActiva === false).unsubscribe()
      this.router.navigate(['/login'])
    }

}
