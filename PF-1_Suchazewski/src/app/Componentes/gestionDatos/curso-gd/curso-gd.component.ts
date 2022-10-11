import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso, listaCursos } from 'src/app/models/curso_interface';
import { CursoAltaComponent } from "./curso-new/curso-alta/curso-alta.component";
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-curso-gd',
  templateUrl: './curso-gd.component.html',
  styleUrls: ['./curso-gd.component.css']
})
export class CursoGdComponent implements OnInit {




  datosCursosBase = listaCursos

  /*cursos: Curso[] = [
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
        inscripcion: true
    }]*/
  DATOS_CURSOS = new MatTableDataSource<Curso>(this.datosCursosBase)
  TabCursosCols: string [] = ['id','nombre','grupo','profesor','fechaInicio','fechaFin','inscripcion','acciones'];

  //dataSourseCursos: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos)

  //displayedColumns: string[] = ['id','nombre','grupo','profesor','fechaInicio','fechaFin','inscripcion','toDo'];
  //datosCursosBase = listaCursos
  //DATOS_CURSOS = new MatTableDataSource([])
  //displayedColumns: string[] = ['id','nombre','grupo','profesor','fechaInicio','fechaFin','inscripcion','toDo'];

  //colum: string [] = ['id','nombre','grupo','profesor','fechaInicio','fechaFin','inscripcion','toDo'];
  //tablaDatos: MatTableDataSource<listaCursos> = new MatTableDataSource<listaCursos>(this.listaCursos)
  //DATOS_CURSOS:any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.DATOS_CURSOS.data = this.datosCursosBase
    //this.DATOS_CURSOS = new MatTableDataSource(this.datosCursosBase);

  }


  filtroCurso(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.DATOS_CURSOS.filter= userData.trim().toLocaleLowerCase();
  }

 /*  filtroCursoGrupo(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.DATOS_CURSOS.filter= userData.trim().toLocaleLowerCase();
  }
 */
  DeleteCurso(id: number) {
    let position = this.datosCursosBase.findIndex(listaCursos => listaCursos.id == id)
    this.datosCursosBase.splice(position, 1)
    this.DATOS_CURSOS.data = this.datosCursosBase
  }

  openDialog() {
    let dialog = this.dialog.open(CursoAltaComponent, {
      width: '250px',
      height: '500px',


    });

    dialog.beforeClosed().subscribe((res: Curso) => {
     console.log(res);
     if (res!=undefined) {
      this.datosCursosBase.push(
        {
           ...res,
           id:this.datosCursosBase.length+1
         }
       )
       this.DATOS_CURSOS.data = this.datosCursosBase
     }
    })
  }
}



