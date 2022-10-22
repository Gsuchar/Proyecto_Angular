import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Alumno } from '../models/alumno_interface';
import { Curso } from '../models/curso_interface';

@Injectable({
  providedIn: 'root'
})
export class GestionDatosService  {


  private datosAlumnos: Alumno[];
  private datosAlumnosSubject$: BehaviorSubject<Alumno[]>
    /* datosAlumnos = listaAlumnos; */

  /* datosAlumnos = listaAlumnos; */

  constructor() {
    this.datosAlumnos= [
      {
          id:1,
          nombre:'Agustina',
          apellido:'Perez',
          telefono: 999999,
          email:'aperez@gmail.com'


      },
      {
          id:2,
          nombre:'Sergio',
          apellido:'Rodriguez',
          telefono:8888888,
          email:'srodriguez@gmail.com'


      },
      {
          id:3,
          nombre:'Lucia',
          apellido:'Gomez',
          telefono:7777777,
          email:'lgomez@gmail.com'


      },
      {
          id:4,
          nombre:'Analia',
          apellido:'Suarez',
          telefono:66666666,
          email:'asuarez@gmail.com'


      },
      {
          id:5,
          nombre:'Mauricio',
          apellido:'Sanchez',
          telefono:555555,
          email:'msanchez@gmail.com'


      },
    ],
    this.datosAlumnosSubject$ = new BehaviorSubject(this.datosAlumnos)
   }



  /* ngOnDestroy() {
    this.datosAlumnosSubject$.unsubscribe();
  }
 */

  obtenerAlumnos$():Observable<Alumno[]>{
    return this.datosAlumnosSubject$.asObservable();
  }
  /* obtenerAlumnoId$(idAlumno:number):Observable<Alumno[]>{
    return this.obtenerAlumnos$().pipe(
      map((alumnoData:Alumno[])=> alumnoData.filter((alumnoID: Alumno)=> alumnoID.id === idAlumno))
    )
  } */
  agregarAlumno(alumno: Alumno){
    this.datosAlumnos.push(alumno);
    /* console.log('antes dle NEXT>>>> '+ this.datosAlumnos) */
    this.datosAlumnosSubject$.next(this.datosAlumnos);

  }


  editarAlumno(datosAlumnoEditar:Alumno){
    let indice = this.datosAlumnos.findIndex((AlumnoBusco: Alumno)=> AlumnoBusco.id ===datosAlumnoEditar.id)
    if(indice > -1){
      this.datosAlumnos[indice] = datosAlumnoEditar
    }
    this.datosAlumnosSubject$.next(this.datosAlumnos)
  }

  deleteAlumno(idCursoBorrar:number){
    let indice = this.datosAlumnos.findIndex((AlumnoBusco: Alumno)=> AlumnoBusco.id ===idCursoBorrar)
    if(indice > -1){
      this.datosAlumnos.splice(indice, 1)
    }
    this.datosAlumnosSubject$.next(this.datosAlumnos)
  }

}


