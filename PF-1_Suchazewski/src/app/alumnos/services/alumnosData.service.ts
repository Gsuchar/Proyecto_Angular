import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../models/alumno_interface';


@Injectable({
  providedIn: 'root'
})
export class alumnosDataService  {


  /* private */ datosAlumnos: Alumno[];
  private datosAlumnosSubject$: BehaviorSubject<Alumno[]>;

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
    this.datosAlumnosSubject$ = new BehaviorSubject(this.datosAlumnos);
   }

   obtenerAlumnos$():Observable<Alumno[]>{
    return this.datosAlumnosSubject$.asObservable();
  }

  agregarAlumno(alumno: Alumno){
    //PARCHE MOMENTAÑO DE ASIGNACION DE ID SEGUN ARRAY ALUMNOS
    let seteoID = this.datosAlumnos.length+1
    let indice = this.datosAlumnos.findIndex((AlumnoBusco: Alumno)=> AlumnoBusco.id === seteoID);
    console.log('datos INDICE>> '+indice)
    if(indice > -1){
      while (this.datosAlumnos[indice].id > seteoID+1 && this.datosAlumnos[indice].id != seteoID ) {
        seteoID++
      }
      /* this.datosAlumnos[indice].id = seteoID ? seteoID++ : seteoID; */
      /* seteoID++ */
    }

    this.datosAlumnos.push({...alumno, id:seteoID});
    this.datosAlumnosSubject$.next(this.datosAlumnos);
  }

  editarAlumno(datosAlumnoEditar:Alumno){
    let indice = this.datosAlumnos.findIndex((AlumnoBusco: Alumno)=> AlumnoBusco.id === datosAlumnoEditar.id);
    if(indice > -1){
      this.datosAlumnos[indice] = datosAlumnoEditar;
    }
    this.datosAlumnosSubject$.next(this.datosAlumnos)
  }

  deleteAlumno(idCursoBorrar:number){
    let indice = this.datosAlumnos.findIndex((AlumnoBusco: Alumno)=> AlumnoBusco.id ===idCursoBorrar)
    if(indice > -1){
      this.datosAlumnos.splice(indice, 1);
    }
    this.datosAlumnosSubject$.next(this.datosAlumnos);
  }

}


