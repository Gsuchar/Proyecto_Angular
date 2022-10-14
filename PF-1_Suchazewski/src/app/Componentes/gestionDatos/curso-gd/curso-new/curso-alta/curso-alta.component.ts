import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-alta',
  templateUrl: './curso-alta.component.html',
  styleUrls: ['./curso-alta.component.css']
})
export class CursoAltaComponent implements OnInit {
  /* aca asigno nombre de titulo dle dialog q quiero mostrar para luego cambiar segun la accion a realizaar*/
  public title='Alta curso';
  formCurso: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CursoAltaComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any
    )
  {
    this.formCurso = this.fb.group(
      {
        id:[''],
        nombre: new FormControl('',[Validators.required]),
        grupo: new FormControl('',[Validators.required]),
        profesor: new FormControl('',[Validators.required]),
        fechaInicio: [99/99/9999],
        fechaFin: [99/99/9999],
        /* inscripcion: new FormControl(true,[Validators.required]) */
        inscripcion: [true]
      }
    )

    console.log(data);
    /* si llega info actuo, si no no hace nada*/
    if(data){
      this.title = 'Editar curso';
      this.formCurso= this.fb.group(
        {
          id:[data.id],
          nombre: new FormControl(data.nombre,[Validators.required]),
          grupo: new FormControl(data.grupo,[Validators.required]),
          profesor: new FormControl(data.profesor,[Validators.required]),
          fechaInicio: [data.fechaInicio,Validators.required],
          fechaFin: [data.fechaFin,Validators.required],
          //por ahora siempre estaran abiertos a inscripcion
          /* inscripcion: new FormControl(data.inscripcion,[Validators.required]) */
          inscripcion: [data.inscripcion]
        }
      )
    }
  }

  ngOnInit(): void {
  }

  guardar() {
   /*  this.dialogRef.close(this.formCurso.value) */
   if(this.formCurso.valid){
    this.dialogRef.close(this.formCurso.value)
    }

  }
}


