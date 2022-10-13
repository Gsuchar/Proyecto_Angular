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

  DATOS_CURSOS = new MatTableDataSource<Curso>(this.datosCursosBase)
  TabCursosCols: string [] = ['id','nombre','grupo','profesor','fechaInicio','fechaFin','inscripcion','acciones'];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.DATOS_CURSOS.data = this.datosCursosBase
  }

  editar(element:any){
    console.log(element);
    /* let dialog = */ this.dialog.open(CursoAltaComponent, {
      width: '250px',
      //height: '500px',
      /*mandoo datos al dialog segun el que quise editar*/
      data: element,

    }).beforeClosed().subscribe((res: Curso) => {
      let found = this.datosCursosBase.find(curSo=>curSo.id == res.id);
      if(found){
             found.nombre = res.nombre;
             found.grupo = res.grupo;
             found.profesor = res.profesor;
             found.fechaInicio = res.fechaInicio;
             found.fechaFin = res.fechaFin;
             found.inscripcion = res.inscripcion;
      }
      //console.log(found);

     })

  }
  filtroCurso(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.DATOS_CURSOS.filter= userData.trim().toLocaleLowerCase();
  }

  DeleteCurso(id: number) {
    let position = this.datosCursosBase.findIndex(listaCursos => listaCursos.id == id)
    this.datosCursosBase.splice(position, 1)
    this.DATOS_CURSOS.data = this.datosCursosBase
  }

  openDialog() {
    /* let dialog = */ this.dialog.open(
      CursoAltaComponent, {
        width: '250px',
        //height: '500px',
        }
    ).beforeClosed().subscribe((res: Curso) => {
      //console.log(res);
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
/* Llave fin*/
}



