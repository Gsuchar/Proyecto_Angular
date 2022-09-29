import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaNombres: Array<Persona> = [
    {nombre: 'Vegueta' , edad: 33},
    {nombre: 'Goku' , edad: 32},
    {nombre: 'Bulma' , edad: 36},
    {nombre: 'Gohan' , edad: 25},
    {nombre: 'Trunks' , edad: 24},
    {nombre: 'Gaston' , edad: 37},
      
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
