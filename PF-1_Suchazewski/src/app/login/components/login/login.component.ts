import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionUserService } from 'src/app/services/sesion-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private sesionUserService: SesionUserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      userName: new FormControl(),
      userPass: new FormControl(),
      userAdmin: new FormControl(false)
    })
   //Fin Constructor
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.formLogin.value)
    this.sesionUserService.login(this.formLogin.value.userName, this.formLogin.value.userPass, this.formLogin.value.userAdmin);
    this.router.navigate(['']);
  }

}
