import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SesionUserService } from 'src/app/core/services/sesion-user.service';
import { Sesion } from 'src/app/core/models/sesion';

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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    //Consumo servicio global de sesion
    private sesionUserService: SesionUserService,
    ) {
      //Armo valores para limitar visual segun sea admin o no
      this.sesionUser$ = this.sesionUserService.obtenerSesion();
      this.sesionUser$.subscribe(evt => console.log('valorSesionActiva$ >>>> '+evt.sesionActiva))
      /* this.sesionUser =  */this.sesionUser$.pipe(
        map(/* (val) => {return val.sesionUsuario?.userAdmin} */valorSesionAdmin=>valorSesionAdmin.sesionUsuario?.userAdmin)
      ).subscribe( admin => this.sesionAdmin = admin ).unsubscribe()
    }

}
