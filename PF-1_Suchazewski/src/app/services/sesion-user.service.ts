import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sesion } from '../models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionUserService {
  sesionSubjet$!: BehaviorSubject<Sesion>;

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubjet$ = new BehaviorSubject(sesion);
   //Fin Constructor
  }

  login(user: string, pass: string, admin: boolean){
    const sesion: Sesion = {
      sesionActiva: true,
      sesionUsuario: {
        userName: user,
        userPass: pass,
        userAdmin: admin
      }
    }
    this.sesionSubjet$.next(sesion);
  }

  //Doy sesion como observable
  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubjet$.asObservable();
  }

 //Llave final
}
