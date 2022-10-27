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
          categoria:'Desarrollo Web',
          estado: true,
          descripcion: 'Curso de Angular + Angular Material.'
      },
      {
          id:2,
          nombre:'ReactJS',
          categoria:'Desarrollo Web',
          estado: true,
          descripcion: 'Curso de ReactJs + Boostrap'
      },
      {
          id:3,
          nombre:'Photoshop',
          categoria:'Diseño Grafico',
          estado: true,
          descripcion: 'Curso de Photoshop + ALGO'
      },
      {
          id:4,
          nombre:'Paint',
          categoria:'Diseño Grafico',
          estado: true,
          descripcion: 'Curso de Paint + ALGO'
      },
      {
          id:5,
          nombre:'Word',
          categoria:'Office',
          estado: true,
          descripcion: 'Curso de Word + Publisher'
      },
      {
          id:6,
          nombre:'Excel',
          categoria:'Office',
          estado: true,
          descripcion: 'Curso de Excel + AccesDB'
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
