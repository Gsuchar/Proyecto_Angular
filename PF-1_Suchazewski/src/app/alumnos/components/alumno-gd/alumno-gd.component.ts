import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/alumnos/models/alumno_interface';
import { AlumnoAltaComponent } from "./alumno-new/alumno-alta/alumno-alta.component";
import { MatDialog } from '@angular/material/dialog';
import { alumnosDataService } from "../../services/alumnosData.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-alumno-gd',
  templateUrl: './alumno-gd.component.html',
  styleUrls: ['./alumno-gd.component.css']
})
export class AlumnoGdComponent implements OnInit {

  /* alumnos$!: Observable<Alumno[]> */
  alumnos$!: Observable<Alumno[]> ;
  //Datos de Tabla visual
  //datosAlumnosBase= new Array<Alumno>();
  //datosAlumnosLista = new MatTableDataSource<Alumno>(this.datosAlumnosBase)
  AlumnosbCols: string [] = ['id','nombre','apellido','telefono','email','acciones'];
  filterpost='';


  constructor(
    private dialog: MatDialog,
    private alumnosDataService: alumnosDataService
    ) { }

  ngOnInit(): void {
    //Recibo array de objetos desde el servicio
    this.alumnos$ = this.alumnosDataService.obtenerAlumnos$();
    //Paso datos del servicio para manejarlo visualmente en el componente
    /* this.datosAlumnosBase = this.gestionDatosServiceAlumnos.datosAlumnos;
    this.datosAlumnosLista.data = this.datosAlumnosBase; */

    //--------------------------------------------------------------//
    //SI HAGO LA VISUAL DIRECTO DEL OBSERVABLE
    //>>>>>>>>>>>>>>> FUNCIONANDO BIEN >>>>>>>>>this.datosAlumnosBase=this.datosAlumnosLista.data  ;
    //--------------------------------------------------------------//


    //--------------------------------------------------------------//
  }



  editarAlumno(element:any){
    this.dialog.open(AlumnoAltaComponent, {
      width: '250px',
      data: element
    }).beforeClosed().subscribe(
      (res: Alumno) => {
        this.alumnosDataService.editarAlumno(res)
        //Datos de tabla para actualizar visual
        /* this.datosAlumnosBase = this.gestionDatosServiceAlumnos.datosAlumnos;
        this.datosAlumnosLista.data = this.datosAlumnosBase; */})
  }

  filtroAlumno(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    /* this.gestionDatosServiceAlumnos.filtroAlumno(userData) */


    /* this.datosAlumnosBase = this.gestionDatosServiceAlumnos.datosAlumnos
    this.datosAlumnosLista.filter= userData.trim().toLocaleLowerCase(); */
  }

  DeleteAlumno(deleteAlumnoId: number) {
    this.alumnosDataService.deleteAlumno(deleteAlumnoId)
    //Datos de tabla para actualizar visual
    /* this.datosAlumnosBase = this.gestionDatosServiceAlumnos.datosAlumnos;
    this.datosAlumnosLista.data = this.datosAlumnosBase; */
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

        /*this.datosAlumnosLista.data = this.datosAlumnosBase */
      }
    })
  }
/* Llave fin*/
}

