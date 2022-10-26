export interface Curso{
  id:number
  nombre: string
  grupo: string
  profesor: string
  fechaInicio: Date
  fechaFin: Date
  inscripcion: boolean
}

/* export let listaCursos: Curso[] = [
  {
      id:1,
      nombre:'Angular',
      grupo:'A1',
      profesor: 'Abner',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 2, 31),
      inscripcion: true
  },
  {
      id:2,
      nombre:'React JS',
      grupo:'R1',
      profesor: 'Goku',
      fechaInicio: new Date(2022, 1, 1),
      fechaFin: new Date(2022, 3, 31),
      inscripcion: true
  },
  {
      id:3,
      nombre:'Node Js',
      grupo:'N1',
      profesor: 'Vegueta',
      fechaInicio: new Date(2022, 3, 1),
      fechaFin: new Date(2022, 5, 31),
      inscripcion: true
  },
  {
      id:3,
      nombre:'Desarrollo Web',
      grupo:'DW1',
      profesor: 'Vegueta',
      fechaInicio: new Date(2022, 2, 1),
      fechaFin: new Date(2022, 4, 31),
      inscripcion: false
  },
  {
      id:4,
      nombre:'CURSO 4',
      grupo:'C1',
      profesor: 'Bulma',
      fechaInicio: new Date(2022, 2, 1),
      fechaFin: new Date(2022, 5, 31),
      inscripcion: true
  },
  {
      id:5,
      nombre:'CURSO 5',
      grupo:'C2',
      profesor: 'Bulma',
      fechaInicio: new Date(2022, 5, 1),
      fechaFin: new Date(2022, 9, 31),
      inscripcion: false
  },
] */
