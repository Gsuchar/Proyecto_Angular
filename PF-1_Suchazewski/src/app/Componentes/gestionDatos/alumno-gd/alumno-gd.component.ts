import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno, listaAlumnos } from 'src/app/models/alumno_interface';
import { AlumnoAltaComponent } from "./alumno-new/alumno-alta/alumno-alta.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alumno-gd',
  templateUrl: './alumno-gd.component.html',
  styleUrls: ['./alumno-gd.component.css']
})
export class AlumnoGdComponent implements OnInit {

  datosAlumnosBase = listaAlumnos

  DATOS_ALUMNOS = new MatTableDataSource<Alumno>(this.datosAlumnosBase)
  AlumnosbCols: string [] = ['id','nombre','apellido','telefono','email','acciones'];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.DATOS_ALUMNOS.data = this.datosAlumnosBase
  }

  editar(element:any){
    //console.log(element);
    /* let dialog = */ this.dialog.open(AlumnoAltaComponent, {
      width: '250px',
      //height: '500px',
      /*mandoo datos al dialog segun el que quise editar*/
      data: element
    }).beforeClosed().subscribe((res: Alumno) => {
      let found = this.datosAlumnosBase.find(aluMno=>aluMno.id == res.id);
      if(found){
             found.nombre = res.nombre;
             found.apellido = res.apellido;
             found.telefono = res.telefono;
             found.email = res.email
      }
      //console.log(found);
     })

  }
  filtroAlumno(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.DATOS_ALUMNOS.filter= userData.trim().toLocaleLowerCase();
  }

  DeleteAlumno(id: number) {
    let position = this.datosAlumnosBase.findIndex(listaAlumnos => listaAlumnos.id == id)
    this.datosAlumnosBase.splice(position, 1)
    this.DATOS_ALUMNOS.data = this.datosAlumnosBase
  }

  openDialog() {
    /* let dialog =  */this.dialog.open(
      AlumnoAltaComponent, {
        width: '250px',
        //height: '500px',
        }
    ).beforeClosed().subscribe((res: Alumno) => {
      //console.log(res);
      if (res!=undefined) {
        this.datosAlumnosBase.push(
          {
            ...res,
            //Parche feo momentaño para asignar "id visual"
            id:this.datosAlumnosBase.length+1
          }
       )

       this.DATOS_ALUMNOS.data = this.datosAlumnosBase
      }
    })
  }
/* Llave fin*/
}

