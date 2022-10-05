import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  formularioUser: FormGroup;
  //controlPasswordsIguales!: boolean;
  constructor(
    private fb: FormBuilder
  ) { 
    this.formularioUser = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(5)]),
      admin: new FormControl(false, []),
    })
  }

  ngOnInit(): void {
  }

  agregarUser(){
    alert(this.controlPasswordsIguales)
    console.log(this.formularioUser)
    //const Fpassword = this.formularioUser.value.password;
    //const Fpassword2 = this.formularioUser.value.password2;
    //this.controlPasswordsIguales = Fpassword === Fpassword2;
  }
   controlPasswordsIguales = (iguales: boolean) : boolean => {
    const Fpassword = this.formularioUser.value.password;
    const Fpassword2 = this.formularioUser.value.password2;
    if (Fpassword === Fpassword2){ 
    return (iguales);
  }else {return (iguales==false);}
};
//ngAfterViewInit() {
//  this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => { this.controlPasswordsIguales;});
//}
}
