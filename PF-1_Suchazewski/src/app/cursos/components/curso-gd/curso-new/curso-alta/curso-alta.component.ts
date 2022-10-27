import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-alta',
  templateUrl: './curso-alta.component.html',
  styleUrls: ['./curso-alta.component.css']
})
export class CursoAltaComponent implements OnInit {
  /* aca asigno nombre de titulo dle dialog q quiero mostrar para luego cambiar segun la accion a realizaar*/
  public title='Alta Curso';
  formCurso: FormGroup;
  check?:false;

  constructor(
    public dialogRef: MatDialogRef<CursoAltaComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any
    )
  {
    this.formCurso = this.fb.group(
      {
        /* id:[''],
        nombre: new FormControl('',[Validators.required]),
        grupo: new FormControl('',[Validators.required]),
        profesor: new FormControl('',[Validators.required]),
        fechaInicio: [99/99/9999],
        fechaFin: [99/99/9999],
        /* inscripcion: new FormControl(true,[Validators.required])
        inscripcion: [true]*/

        id:[''],
        nombre: new FormControl('',[Validators.required]),
        categoria: new FormControl('',[Validators.required]),
        estado: [false],
        //por ahora siempre estaran abiertos a inscripcion
        /* inscripcion: new FormControl(data.inscripcion,[Validators.required]) */
        descripcion: new FormControl('',[Validators.required])

      }
    )

    console.log(data);
    /* si llega info actuo, si no no hace nada*/
    if(data){
      this.title = 'Editar Curso';
      this.formCurso= this.fb.group(
        {
          id:[data.id],
          nombre: new FormControl(data.nombre,[Validators.required]),
          categoria: new FormControl(data.categoria,[Validators.required]),
          estado: [data.estado],
          //por ahora siempre estaran abiertos a inscripcion
          /* inscripcion: new FormControl(data.inscripcion,[Validators.required]) */
          descripcion: new FormControl(data.descripcion,[Validators.required])
        }
      )
    }
   //Fin constructor
  }

  ngOnInit(): void {
  }

  guardar() {
   /*  this.dialogRef.close(this.formCurso.value) */
   if(this.formCurso.valid){
    this.dialogRef.close(this.formCurso.value), console.log(this.formCurso.value)
    }
  }

  checkSli(){

  }


}


