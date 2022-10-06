import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  formularioUser: FormGroup;
  controlPasswordsIguales!:boolean;
  
  //static cntrlPassIguales: boolean = false;
  constructor(
    private fb: FormBuilder
  ) { 
    this.formularioUser = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern('^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$'), Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password2: new FormControl('', [Validators.required, Validators.minLength(5)]),
      admin: new FormControl(false, [])});
  }

  ngOnInit(): void {
  }

  agregarUser(){
     console.log(this.formularioUser)
    const Fpassword = this.formularioUser.value.password;
    const Fpassword2 = this.formularioUser.value.password2;    
    this.controlPasswordsIguales = Fpassword === Fpassword2;
  }
  
}