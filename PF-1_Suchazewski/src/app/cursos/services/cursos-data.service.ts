import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models/curso_interface';


@Injectable({
  providedIn: 'root'
})
export class CursosDataService {

  datosCursos: Curso[];
  private datosCursosSubject$: BehaviorSubject<Curso[]>;

  constructor() {
    this.datosCursos = [
      {
          id:1,
          nombre:'Angular',
          grupo:'A1',
          profesor: 'Abner',
          fechaInicio: new Date(2022, 0, 1),
          fechaFin: new Date(2022, 2, 31),
          inscripcion: true
      },
      {
          id:2,
          nombre:'React JS',
          grupo:'R1',
          profesor: 'Goku',
          fechaInicio: new Date(2022, 1, 1),
          fechaFin: new Date(2022, 3, 31),
          inscripcion: true
      },
      {
          id:3,
          nombre:'Node Js',
          grupo:'N1',
          profesor: 'Vegueta',
          fechaInicio: new Date(2022, 3, 1),
          fechaFin: new Date(2022, 5, 31),
          inscripcion: true
      },
      {
          id:3,
          nombre:'Desarrollo Web',
          grupo:'DW1',
          profesor: 'Vegueta',
          fechaInicio: new Date(2022, 2, 1),
          fechaFin: new Date(2022, 4, 31),
          inscripcion: false
      },
      {
          id:4,
          nombre:'CURSO 4',
          grupo:'C1',
          profesor: 'Bulma',
          fechaInicio: new Date(2022, 2, 1),
          fechaFin: new Date(2022, 5, 31),
          inscripcion: true
      },
      {
          id:5,
          nombre:'CURSO 5',
          grupo:'C2',
          profesor: 'Bulma',
          fechaInicio: new Date(2022, 5, 1),
          fechaFin: new Date(2022, 9, 31),
          inscripcion: false
      }
    ],
    this.datosCursosSubject$ = new BehaviorSubject(this.datosCursos);
  }

  obtenerCursos$():Observable<Curso[]>{
    return this.datosCursosSubject$.asObservable();
  }

  agregarCurso(curso: Curso){
    //PARCHE MOMENTAÑO DE ASIGNACION DE ID SEGUN ARRAY ALUMNOS
    let seteoID = this.datosCursos.length+1
    let indice = this.datosCursos.findIndex((CursoBusco: Curso)=> CursoBusco.id === seteoID);
    //console.log('datos INDICE>> '+indice)
    if(indice > -1){
      while (this.datosCursos[indice].id > seteoID+1 && this.datosCursos[indice].id != seteoID ) {
        seteoID++
      }
      /* this.datosAlumnos[indice].id = seteoID ? seteoID++ : seteoID; */
      /* seteoID++ */
    }

    this.datosCursos.push({...curso, id:seteoID});
    this.datosCursosSubject$.next(this.datosCursos);
  }

  editarCurso(datosCursoEditar: Curso){
    let indice = this.datosCursos.findIndex((CursoBusco: Curso)=> CursoBusco.id === datosCursoEditar.id);
    if(indice > -1){
      this.datosCursos[indice] = datosCursoEditar;
    }
    this.datosCursosSubject$.next(this.datosCursos)
  }

  deleteCurso(idCursoBorrar:number){
    let indice = this.datosCursos.findIndex((CursoBusco: Curso)=> CursoBusco.id ===idCursoBorrar)
    if(indice > -1){
      this.datosCursos.splice(indice, 1);
    }
    this.datosCursosSubject$.next(this.datosCursos);
  }
 //Ultima Llave
}
