import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/cursos/models/curso_interface';
import { CursoAltaComponent } from "./curso-new/curso-alta/curso-alta.component";
import { MatDialog } from '@angular/material/dialog';
import { CursosDataService } from "../../services/cursos-data.service";
import { map, Observable  } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-curso-gd',
  templateUrl: './curso-gd.component.html',
  styleUrls: ['./curso-gd.component.css']
})
export class CursoGdComponent implements OnInit, AfterViewInit {

 //DESAFIO
 cursos$!: Observable<Curso[]> ;

 //Datos de Tabla visual
 datosCursos = [];
 datosCursosLista = new MatTableDataSource<Curso>(this.datosCursos)
 /* CursosbCols: string [] = ['id','nombre','grupo','profesor','fechaInicio','fechaFin','inscripcion','acciones']; */
 CursosbCols: string [] = ['id','nombre','categoria','estado','descripcion','acciones'];
 @ViewChild(MatPaginator)
  paginator!: MatPaginator;

 ngAfterViewInit() {
   this.datosCursosLista.paginator = this.paginator;
   this.paginator._intl.itemsPerPageLabel = 'items por pagina';
 }


 constructor(
   private dialog: MatDialog,
   private cursosDataService: CursosDataService,

   ) { }

 ngOnInit(): void {
   //BORRAR SOLO PARA VER COMPORTAMIENTO DEL SERVICIO //DESAFIO
   this.cursos$ = this.cursosDataService.obtenerCursos$();

   //Paso datos del servicio como observable y lo vuelco directo en la data asiganda a la tabla
   this.cursosDataService.obtenerCursos$().subscribe( curs => this.datosCursosLista.data = curs as Curso[]).unsubscribe;
 }


 editarCurso(element:any){
   this.dialog.open(CursoAltaComponent, {
     width: '250px',
     data: element
   }).beforeClosed().subscribe(
     (res: Curso) => {
       this.cursosDataService.editarCurso(res)
     })
 }

 filtroCurso(event:Event){
   const userData = (event.target as HTMLInputElement).value;
   this.datosCursosLista.filter= userData.trim().toLocaleLowerCase();
 }

 DeleteCurso(deleteCursoId: number) {
   this.cursosDataService.deleteCurso(deleteCursoId);
 }

 nuevoCurso() {
   this.dialog.open(
    CursoAltaComponent, {
       width: '250px'
     }
   ).beforeClosed().subscribe(
     (res: Curso) => {
     if (res!=undefined) {
       let ultiCurso = {
         ...res
       }
       //PASO VALORES AL SUBJECT DLE SERVICIO
       this.cursosDataService.agregarCurso(ultiCurso);

     }
   })
 }
/* Llave fin*/
}
