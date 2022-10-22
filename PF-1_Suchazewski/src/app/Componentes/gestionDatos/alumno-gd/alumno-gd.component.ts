import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno_interface';
import { AlumnoAltaComponent } from "./alumno-new/alumno-alta/alumno-alta.component";
import { MatDialog } from '@angular/material/dialog';
import { GestionDatosService } from "../../../Servicios/gestion-datos.service";
import { MaxLengthValidator } from '@angular/forms';
import { last, lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-alumno-gd',
  templateUrl: './alumno-gd.component.html',
  styleUrls: ['./alumno-gd.component.css']
})
export class AlumnoGdComponent implements OnInit {


  alumnos$!: Observable<Alumno[]>
  datosAlumnosBase= new Array<Alumno>();
  /* datosAlumnosBase= new Array<Alumno>(); */
  /* datosAlumnosBase = listaAlumnos */

  datosAlumnosLista = new MatTableDataSource<Alumno>(this.datosAlumnosBase)
  AlumnosbCols: string [] = ['id','nombre','apellido','telefono','email','acciones'];


  constructor(
    private dialog: MatDialog,
    public gestionDatosServiceAlumnos: GestionDatosService
    ) { }

  ngOnInit(): void {
    this.datosAlumnosLista.data = this.datosAlumnosBase;

    //recibo array de objetos desde el servicio
    this.alumnos$ = this.gestionDatosServiceAlumnos.obtenerAlumnos$();
    //paso de array de objetos a array de datos
    /* this.alumnos$.forEach((object: any) =>{
      console.log(object);
      for (let index = 0; index < object.length; index++) {


       this.datosAlumnosBase.push(object[index])
      }


    }); */

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
    this.datosAlumnosLista.filter= userData.trim().toLocaleLowerCase();
  }

  DeleteAlumno(id: number) {
    let position = this.datosAlumnosBase.findIndex(listaAlumnos => listaAlumnos.id == id)
    this.datosAlumnosBase.splice(position, 1)
    this.datosAlumnosLista.data = this.datosAlumnosBase
  }

  openDialog() {
    /* let dialog =  */this.dialog.open(
      AlumnoAltaComponent, {
        width: '250px',
        //height: '500px',
        }
    ).beforeClosed().subscribe((res: Alumno) => {
      //ARREGLAR ID
      let chk = this.datosAlumnosBase.length+1
      if (res!=undefined) {
        let ultiAlumno = {
          ...res,
          id:chk
        }


        //PASO VALORES AL SUBJECT DLE SERVICIO
        this.gestionDatosServiceAlumnos.agregarAlumnos(ultiAlumno);

        this.datosAlumnosLista.data = this.datosAlumnosBase



    }
    })
  }
/* Llave fin*/
}

