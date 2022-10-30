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
  sesionUser$!: Observable<Sesion>;
  sesionUser!: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sesionUserService: SesionUserService,
    ) {
      this.sesionUser$ = this.sesionUserService.obtenerSesion();
      this.sesionUser$.subscribe(evt => console.log('adadadas>>>>'+evt.sesionActiva))
      this.sesionUser = this.sesionUser$.pipe(
        map((val) => {return val.sesionActiva})
      )
    }

}
