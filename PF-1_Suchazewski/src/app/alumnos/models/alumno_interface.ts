export interface Alumno{
  id:number
  nombre: string
  apellido: string
  telefono: number
  email: string
}

export let listaAlumnos: Alumno[] = [
  {
      id:1,
      nombre:'Agustina',
      apellido:'Perez',
      telefono: 999999,
      email:'aperez@gmail.com'


  },
  {
      id:2,
      nombre:'Sergio',
      apellido:'Rodriguez',
      telefono:8888888,
      email:'srodriguez@gmail.com'


  },
  {
      id:3,
      nombre:'Lucia',
      apellido:'Gomez',
      telefono:7777777,
      email:'lgomez@gmail.com'


  },
  {
      id:4,
      nombre:'Analia',
      apellido:'Suarez',
      telefono:66666666,
      email:'asuarez@gmail.com'


  },
  {
      id:5,
      nombre:'Mauricio',
      apellido:'Sanchez',
      telefono:555555,
      email:'msanchez@gmail.com'


  },
]
