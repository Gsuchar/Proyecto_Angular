import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se creo el componente', () => {
    expect(component).toBeTruthy();
  });

  /* it(`Formulario invalido si no agrego contraseña`, () => {
    const Formulario = component.formLogin
    const userName = Formulario.controls['userName']
    userName.setValue('VEGUETA');
    expect(Formulario.valid).toBeFalse();

  }); */
});
