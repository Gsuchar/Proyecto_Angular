import { Injectable } from '@angular/core';
import { listaAlumnos } from '../models/alumno_interface';

@Injectable({
  providedIn: 'root'
})
export class GestionDatosService {

  static listaAlumnos: any;
  datosAlumnos = listaAlumnos;

  constructor() { }

  retornarAlumnos(){
    return[
      this.datosAlumnos
    ]
  }

}
