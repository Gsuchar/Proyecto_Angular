import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alumno-alta',
  templateUrl: './alumno-alta.component.html',
  styleUrls: ['./alumno-alta.component.css']
})
export class AlumnoAltaComponent implements OnInit {
  /* aca asigno nombre de titulo dle dialog q quiero mostrar para luego cambiar segun la accion a realizar*/
  public title='Alta Alumno'
   formAlumno: FormGroup = this.fb.group(
    {
      id:[null,Validators.required],
      nombre:[null,Validators.required],
      apellido:[null,Validators.required],
      telefono: [null,Validators.required],
      email: [null,Validators.required],

    }
  )
  constructor(
    public dialogRef: MatDialogRef<AlumnoAltaComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    console.log(data);
    /* si llega info actuo, si no no hace nada*/
    if(data){
      this.title = 'Editar curso';
      this.formAlumno= this.fb.group(
        {
          id:[data.id,Validators.required],
          nombre:[data.nombre,Validators.required],
          apellido:[data.apellido,Validators.required],
          telefono: [data.telefono,Validators.required],
          email: [data.email,Validators.required],
        }
      )
    }
  }

  ngOnInit(): void {
  }

  guardar() {
    this.dialogRef.close(this.formAlumno.value)

  }
}
