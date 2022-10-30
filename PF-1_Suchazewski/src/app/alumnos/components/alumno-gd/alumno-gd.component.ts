import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/alumnos/models/alumno_interface';
import { AlumnoAltaComponent } from "./alumno-new/alumno-alta/alumno-alta.component";
import { MatDialog } from '@angular/material/dialog';
import { AlumnosDataService } from "../../services/alumnos-data.service";
import { map, Observable  } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';





@Component({
  selector: 'app-alumno-gd',
  templateUrl: './alumno-gd.component.html',
  styleUrls: ['./alumno-gd.component.css']
})
export class AlumnoGdComponent implements OnInit {

  //DESAFIO
  alumnos$!: Observable<Alumno[]> ;

  //Datos de Tabla visual
  datosAlumnos = [];
  datosAlumnosLista = new MatTableDataSource<Alumno>(this.datosAlumnos)
  AlumnosbCols: string [] = ['id','nombre','apellido','telefono','email','acciones'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

 ngAfterViewInit() {
   this.datosAlumnosLista.paginator = this.paginator;
   this.paginator._intl.itemsPerPageLabel = 'items por pagina';
 }



  constructor(
    private dialog: MatDialog,
    private alumnosDataService: AlumnosDataService
    ) { }

  ngOnInit(): void {
    //BORRAR SOLO PARA VER COMPORTAMIENTO DEL SERVICIO //DESAFIO
    this.alumnos$ = this.alumnosDataService.obtenerAlumnos$();

    //Paso datos del servicio como observable y lo vuelco directo en la data asiganda a la tabla
    this.alumnosDataService.obtenerAlumnos$().subscribe(alum => this.datosAlumnosLista.data = alum as Alumno[]).unsubscribe;
  }


  editarAlumno(element:any){
    this.dialog.open(AlumnoAltaComponent, {
      width: '250px',
      data: element
    }).beforeClosed().subscribe(
      (res: Alumno) => {
        this.alumnosDataService.editarAlumno(res)
      })
  }

  filtroAlumno(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.datosAlumnosLista.filter= userData.trim().toLocaleLowerCase();
  }

  DeleteAlumno(deleteAlumnoId: number) {
    this.alumnosDataService.deleteAlumno(deleteAlumnoId);
  }

  nuevoAlumno() {
    this.dialog.open(
      AlumnoAltaComponent, {
        width: '250px'
      }
    ).beforeClosed().subscribe(
      (res: Alumno) => {
      if (res!=undefined) {
        let ultiAlumno = {
          ...res
        }
        //PASO VALORES AL SUBJECT DLE SERVICIO
        this.alumnosDataService.agregarAlumno(ultiAlumno);

      }
    })
  }
/* Llave fin*/
}

