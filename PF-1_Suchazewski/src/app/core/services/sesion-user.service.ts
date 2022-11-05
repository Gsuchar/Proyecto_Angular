import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,map, tap, combineLatestAll } from 'rxjs';
import { Usuario } from 'src/app/usuarios/models/usuario_interface';
import { UsuariosDataService } from 'src/app/usuarios/services/usuarios-data.service';
import { Sesion } from '../models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionUserService {
  sesionSubjet$!: BehaviorSubject<Sesion>;

  constructor( private usuariosDataservice : UsuariosDataService) {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubjet$ = new BehaviorSubject(sesion);
   //Fin Constructor
  }


  /* checkUser(user: string, pass: string){
   this.usuariosDataservice.obtenerUsers$().pipe(
      map(usuariosData=> {


        for(let index = 0; index < usuariosData.length; index++) {
          const element: Usuario = usuariosData[index];
          if ((element.userName === user) && (element.userPass === pass)  ) {
            console.log(element.userName, pass);
            this.login(element.id,element.userName, element.userPass, element.userAdmin)


            index = usuariosData.length+99
          }else{
            alert('Usuario o Contraseña incorrectos, re ingrese')
            index = usuariosData.length+99;
          }
        }
      })
    ).subscribe(g=>console.log('A VER Q SALE>>> '+g)).unsubscribe
  }
 */


  login(/* id: number, */ user: string, pass: string, admin: boolean){
    const sesion: Sesion = {
      sesionActiva: true,
      sesionUsuario: {
        id: 1,
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
