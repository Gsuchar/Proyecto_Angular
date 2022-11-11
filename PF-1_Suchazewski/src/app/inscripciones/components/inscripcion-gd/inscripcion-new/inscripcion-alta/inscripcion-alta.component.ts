import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, observable } from 'rxjs';
import { Alumno } from 'src/app/alumnos/models/alumno_interface';
import { AlumnosDataService } from 'src/app/alumnos/services/alumnos-data.service';
import { Curso } from 'src/app/cursos/models/curso_interface';
import { CursosDataService } from 'src/app/cursos/services/cursos-data.service';

@Component({
  selector: 'app-inscripcion-alta',
  templateUrl: './inscripcion-alta.component.html',
  styleUrls: ['./inscripcion-alta.component.css']
})

export class InscripcionAltaComponent implements OnInit {



  public title='Alta Inscripcion';

  // Conf STEPER
  //----------------------------------------------------------
  firstFormGroup = this._formBuilder.group({
    firstCtrl: [''/* {value: '', disabled: true}*/ , Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  //----------------------------------------------------------

  //FORMULARIO ENVIO FINAL
  formInscripcion: FormGroup;

  //DATOS API ALUMNOS y CURSOS
  alum$!: Observable<Alumno[]>
  curs$!: Observable<Curso[]>
  datosAlumnosLista = new MatTableDataSource<Alumno>();
  AlumnosbCols: string [] = ['id','nombreapellido', 'acciones'/*, 'email' */];
  /* @ViewChild(MatPaginator)paginator!: MatPaginator; */
  datosCursosLista = new MatTableDataSource<Curso>();
  CursosbCols: string [] = ['id','nombre', 'acciones'];
  @ViewChild(MatPaginator)paginator!: MatPaginator;


  /* selectedItems!:string[]; */



  constructor(

    private _formBuilder: FormBuilder,
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<InscripcionAltaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private alumServData : AlumnosDataService,
    private cursServData : CursosDataService

    ) {
      this.alum$ = this.alumServData.obtenerAlumnos$();
      this.curs$ = this.cursServData.obtenerCursos$();
      this.formInscripcion = this.fb.group(
        {
          id:[''],
          inscAlumno:[''],
          inscCurso:['']
        });
        if (data) {
          this.formInscripcion = this.fb.group(
            {
              id:[data.id],
              inscAlumno:[data.inscAlumno],
              inscCurso:[data.inscCurso]
            });
            this.firstFormGroup = this._formBuilder.group({
              firstCtrl: [data.inscAlumno.nombre/* {value: '', disabled: true}*/ , Validators.required],
            });
            this.secondFormGroup = this._formBuilder.group({
              secondCtrl: [data.inscCurso.nombre, Validators.required],
            });
        };
        /* this.alum$ = this.alumServData.obtenerAlumnos$();
        this.curs$ = this.cursServData.obtenerCursos$(); */

    }
  ngAfterViewInit() {
    this.firstFormGroup.invalid;
    this.datosAlumnosLista.paginator = this.paginator;
    this.datosCursosLista.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'items por pagina';
  }

  ngOnInit(): void {
    this.alum$.subscribe( alumD => this.datosAlumnosLista.data = alumD ).unsubscribe
    this.curs$.subscribe( cursD => this.datosCursosLista.data = cursD ).unsubscribe
    /* this.selectedItems = new Array<string>(); */
  }

  guardar() {
    /*  this.dialogRef.close(this.firstFormGroup.value, this.secondFormGroup.value) */
    if(this.formInscripcion.valid){
     this.dialogRef.close(this.formInscripcion.value/*, this.secondFormGroup.value*/), console.log(this.firstFormGroup.value, this.secondFormGroup.value)
     }
   }

   filtroAlumno(event:Event){
    const userData = (event.target as HTMLInputElement).value;
    this.datosAlumnosLista.filter= userData.trim().toLocaleLowerCase();
  }

  getAlumnoInscipcion(e:any, datosAlumnoChecked: Alumno ){
	  if(e.checked)	{
      console.log(datosAlumnoChecked.id + ' checked');
      /* this.selectedItems.push(id); */
      console.log(datosAlumnoChecked.id +' '+ datosAlumnoChecked.nombre +' '+ datosAlumnoChecked.apellido  + ' Fchecked');

      /* this.firstFormGroup.value.firstCtrl = nombre +' '+ apellido; */
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: [datosAlumnoChecked.nombre +' '+ datosAlumnoChecked.apellido, Validators.required],
      });
      console.log(this.firstFormGroup.value)

      this.formInscripcion.value.inscAlumno = {
        id: datosAlumnoChecked.id,
        nombre: datosAlumnoChecked.nombre,
        apellido: datosAlumnoChecked.apellido,
        telefono: datosAlumnoChecked.telefono,
        email: datosAlumnoChecked.email
      }

      console.log('A VER Q SALIO>> ' + this.formInscripcion.value.inscAlumno.id)
	  }
  else{
    console.log(datosAlumnoChecked.id + 'Unchecked');
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [''/* {value: '', disabled: true}*/ , Validators.required],
    });
    this.firstFormGroup.invalid;

    /* this.selectedItems = this.selectedItems.filter(m=>m!=id); */
  }

	 /* console.log(this.selectedItems+' -->>>>>> sssssss'); */
  }

  getCursoInscipcion(e:any, datosCursoChecked: Curso ){
	  if(e.checked)	{
      /* console.log(datosCursoChecked.id + ' checked'); */
      /* this.selectedItems.push(id); */
      /* console.log(datosCursoChecked.id +' '+ datosCursoChecked.nombre +' '+ datosCursoChecked.apellido  + ' Fchecked'); */

      /* this.firstFormGroup.value.firstCtrl = nombre +' '+ apellido; */
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: [datosCursoChecked.nombre , Validators.required],
      });
      /* console.log(this.secondFormGroup.value) */

      this.formInscripcion.value.inscCurso = {
        id: datosCursoChecked.id,
        nombre: datosCursoChecked.nombre,
        categoria: datosCursoChecked.categoria,
        estado: datosCursoChecked.estado,
        descripcion: datosCursoChecked.descripcion
      }

      console.log('A VER Q SALIO>> ' + this.formInscripcion.value.inscAlumno.id)
	  }
  else{
    /* console.log(datosCursoChecked.id + 'Unchecked'); */
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [''/* {value: '', disabled: true}*/ , Validators.required],
    });
    this.secondFormGroup.invalid;

    /* this.selectedItems = this.selectedItems.filter(m=>m!=id); */
  }

	 /* console.log(this.selectedItems+' -->>>>>> sssssss'); */
  }
}
