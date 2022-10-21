import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../models/alumno_interface';
import { Curso } from '../models/curso_interface';

@Injectable({
  providedIn: 'root'
})
export class GestionDatosService implements OnInit, OnDestroy {


  datosAlumnos: Alumno[];
  datosAlumnosSubject$: BehaviorSubject<Alumno[]>
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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /* retornarAlumnos(){
    return[
      this.datosAlumnos
    ]
  } */

  ngOnDestroy() {
    this.datosAlumnosSubject$.unsubscribe();
  }


  obtenerAlumnos():Observable<Alumno[]>{
    return this.datosAlumnosSubject$.asObservable();
  }

  agregarAlumnos(alumno: Alumno){
    this.datosAlumnos.push(alumno);
    console.log('antes dle NEX>>>> '+ this.datosAlumnos[this.datosAlumnos.length-1].id)
    this.datosAlumnosSubject$.next(this.datosAlumnos);
    this.datosAlumnosSubject$.forEach(elem => {
      console.log('DATOS DL SUBJET LUGO DEL NEX>>>> '+ elem[elem.length-1].id)

    });
  }

}
