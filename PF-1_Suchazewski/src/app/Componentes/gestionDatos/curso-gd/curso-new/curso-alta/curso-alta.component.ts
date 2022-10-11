import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-alta',
  templateUrl: './curso-alta.component.html',
  styleUrls: ['./curso-alta.component.css']
})
export class CursoAltaComponent implements OnInit {

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
    private fb:FormBuilder

  ) {}

  ngOnInit(): void {
  }
  guardar() {
    this.dialogRef.close(this.formCurso.value)
  }
}


