import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/alumnos/models/alumno_interface';
import { AlumnoAltaComponent } from "./alumno-new/alumno-alta/alumno-alta.component";
import { MatDialog } from '@angular/material/dialog';
import { AlumnosDataService } from "../../services/alumnos-data.service";
import { map, Observable  } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-gd',
  templateUrl: './alumno-gd.component.html',
  styleUrls: ['./alumno-gd.component.css']
})
export class AlumnoGdComponent{
  title!: 'Gestion Alumnos';
  alumnos$!: Observable<Alumno[]> ;
  datosAlumnosLista = new MatTableDataSource<Alumno>();
  AlumnosbCols: string [] = ['id','nombre','apellido','telefono','email','acciones'];
  @ViewChild(MatPaginator)paginator!: MatPaginator;

 ngAfterViewInit() {
   this.alumnos$.subscribe( alumD => this.datosAlumnosLista.data = alumD ).unsubscribe
   this.datosAlumnosLista.paginator = this.paginator;
   this.paginator._intl.itemsPerPageLabel = 'items por pagina';
 }
  constructor(
    private dialog: MatDialog,
    private alumnosDataService: AlumnosDataService,
    private router : Router
    )
    { this.alumnos$ = this.alumnosDataService.obtenerAlumnos$(); }

  editarAlumno(element:any){
    this.dialog.open(AlumnoAltaComponent, {
      width: '250px',
      data: element
    }).beforeClosed().subscribe(
      (res: Alumno) => {
        this.alumnosDataService.editarAlumno(res);
        this.actualizoVisualData();
      })
  }

  filtroAlumno(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.datosAlumnosLista.filter= userData.trim().toLocaleLowerCase();
  }

  DeleteAlumno(deleteAlumnoId: number) {
    this.alumnosDataService.deleteAlumno(deleteAlumnoId);
    this.actualizoVisualData();

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
        this.actualizoVisualData();
      }
    })
  }
  actualizoVisualData(){
    this.alumnos$.subscribe( alumD => this.datosAlumnosLista.data = alumD ).unsubscribe
    //RouteReuseStrategy es un provider de Angular
    /* Nos brinda la estrategia que nos permite decidir qué componente de ruta puede vivir más allá de su enrutamiento,
    y qué componente de ruta está condenado a ser creado y recreado cada vez que un usuario sale o ingresa a la ruta. */
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    }
/* Llave fin*/
}

