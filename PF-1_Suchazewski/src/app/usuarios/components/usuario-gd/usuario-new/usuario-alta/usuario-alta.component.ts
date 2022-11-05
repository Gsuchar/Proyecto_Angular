import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-alta',
  templateUrl: './usuario-alta.component.html',
  styleUrls: ['./usuario-alta.component.css']
})
export class UsuarioAltaComponent implements OnInit {
  /* aca asigno nombre de titulo dle dialog q quiero mostrar para luego cambiar segun la accion a realizaar*/
  public title='Alta Usuario';
  formUsuario: FormGroup;
  check?:false;

  constructor(
    public dialogRef: MatDialogRef<UsuarioAltaComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any
    )
  {
    this.formUsuario = this.fb.group(
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
        userName: new FormControl('',[Validators.required]),
        userPass: new FormControl('',[Validators.required]),
        userAdmin: [false],
        //por ahora siempre estaran abiertos a inscripcion
        /* inscripcion: new FormControl(data.inscripcion,[Validators.required]) */
        /* descripcion: new FormControl('',[Validators.required]) */

      }
    )

    console.log(data);
    /* si llega info actuo, si no no hace nada*/
    if(data){
      this.title = 'Editar Usuario';
      this.formUsuario= this.fb.group(
        {
          id:[data.id],
          userName: new FormControl(data.userName,[Validators.required]),
          userPass: new FormControl(data.userPass,[Validators.required]),
          userAdmin: [data.userAdmin],
          //por ahora siempre estaran abiertos a inscripcion
          /* inscripcion: new FormControl(data.inscripcion,[Validators.required]) */
          /* descripcion: new FormControl(data.descripcion,[Validators.required]) */
        }
      )
    }
   //Fin constructor
  }

  ngOnInit(): void {
  }

  guardar() {
   /*  this.dialogRef.close(this.formCurso.value) */
   if(this.formUsuario.valid){
    this.dialogRef.close(this.formUsuario.value), console.log(this.formUsuario.value)
    }
  }


 //LLAVE FINAL
}
