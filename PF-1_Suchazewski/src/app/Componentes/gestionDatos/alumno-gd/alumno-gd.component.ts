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
    //recibo array de objetos desde el servicio
    this.alumnos$ = this.gestionDatosServiceAlumnos.obtenerAlumnos$();
    this.datosAlumnosBase=this.datosAlumnosLista.data  ;
  }

  editarAlumno(element:any){

    this.dialog.open(AlumnoAltaComponent, {

      width: '250px',
      data: element

    }).beforeClosed().subscribe(
      (res: Alumno) => {

        this.gestionDatosServiceAlumnos.editarAlumno(res)

      })
  }

  filtroAlumno(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.gestionDatosServiceAlumnos.filtroAlumno(userData);
    /* this.datosAlumnosLista.filter= userData.trim().toLocaleLowerCase(); */
    return event
  }

  DeleteAlumno(deleteAlumnoId: number) {
    this.gestionDatosServiceAlumnos.deleteAlumno(deleteAlumnoId)
  }

  nuevoAlumno() {
    this.dialog.open(

      AlumnoAltaComponent, {

        width: '250px'

      }
    ).beforeClosed().subscribe(
      (res: Alumno) => {

      //ARREGLAR ID
      /* let chk = this.datosAlumnosBase.length+1 */
      if (res!=undefined) {
        let ultiAlumno = {
          ...res,
          /* id:chk */
        }
        //PASO VALORES AL SUBJECT DLE SERVICIO
        this.gestionDatosServiceAlumnos.agregarAlumno(ultiAlumno);

         this.datosAlumnosLista.data = this.datosAlumnosBase
      }
    })
  }
/* Llave fin*/
}

