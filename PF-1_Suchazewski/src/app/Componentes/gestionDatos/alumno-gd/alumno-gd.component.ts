import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno, listaAlumnos } from 'src/app/models/alumno_interface';
import { AlumnoAltaComponent } from "./alumno-new/alumno-alta/alumno-alta.component";
import { MatDialog } from '@angular/material/dialog';
import { GestionDatosService } from "../../../Servicios/gestion-datos.service";

@Component({
  selector: 'app-alumno-gd',
  templateUrl: './alumno-gd.component.html',
  styleUrls: ['./alumno-gd.component.css']
})
export class AlumnoGdComponent implements OnInit {


  alumnos:any;
  datosAlumnosBase= new Array<Alumno>();
  /* datosAlumnosBase= new Array<Alumno>(); */
  /* datosAlumnosBase = listaAlumnos */

  DATOS_ALUMNOS = new MatTableDataSource<Alumno>(this.datosAlumnosBase)
  AlumnosbCols: string [] = ['id','nombre','apellido','telefono','email','acciones'];


  constructor(
    private dialog: MatDialog,
    public gestionDatosAlumnos: GestionDatosService
    ) { }

  ngOnInit(): void {
    this.DATOS_ALUMNOS.data = this.datosAlumnosBase;
    //recibo array de objetos desde el servicio
    this.alumnos = this.gestionDatosAlumnos.retornarAlumnos();
    //paso de array de objetos a array de datos
    this.alumnos.forEach((object: any) =>{
      /* console.log(object); */
      for (let index = 0; index < object.length; index++) {

        /* console.log(object[index].id) */
       this.datosAlumnosBase.push(object[index])
      }


    });

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

      let chk = this.datosAlumnosBase.length+1
      if (res!=undefined) {
        this.datosAlumnosBase.push(
          {
            ...res,
            //Parche feo momentaño para asignar "id visual"

            /* id:this.datosAlumnosBase.length+1 */
            id:chk
          }
       )

       this.DATOS_ALUMNOS.data = this.datosAlumnosBase
       console.log('atosAlumnosBase==>  '+this.datosAlumnosBase)

       GestionDatosService.listaAlumnos= this.datosAlumnosBase
       console.log(GestionDatosService.listaAlumnos)
      }
    })
  }
/* Llave fin*/
}

