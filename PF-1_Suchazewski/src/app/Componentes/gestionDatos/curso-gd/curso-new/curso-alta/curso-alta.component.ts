import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-alta',
  templateUrl: './curso-alta.component.html',
  styleUrls: ['./curso-alta.component.css']
})
export class CursoAltaComponent implements OnInit {
  /* aca asigno nombre de titulo dle dialog q quiero mostrar para luego cambiar segun la accion a realizaar*/
  public title='Alta curso'
   formCurso: FormGroup = this.fb.group(
    {
      id:[null,Validators.required],
      nombre:[null,Validators.required],
      grupo:[null,Validators.required],
      profesor: [null,Validators.required],
      fechaInicio: [null,Validators.required],
      fechaFin: [null,Validators.required],
      inscripcion: [null,Validators.required]
    }
  )
  constructor(
    public dialogRef: MatDialogRef<CursoAltaComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    console.log(data);
    /* si llega info actuo, si no no hace nada*/
    if(data){
      this.title = 'Editar curso';
      this.formCurso= this.fb.group(
        {
          id:[data.id,Validators.required],
          nombre:[data.nombre,Validators.required],
          grupo:[data.grupo,Validators.required],
          profesor: [data.profesor,Validators.required],
          fechaInicio: [data.fechaInicio,Validators.required],
          fechaFin: [data.fechaFin,Validators.required],
          inscripcion: [data.inscripcion,Validators.required]
        }
      )
    }
  }

  ngOnInit(): void {
  }

  guardar() {
    this.dialogRef.close(this.formCurso.value)

  }
}


