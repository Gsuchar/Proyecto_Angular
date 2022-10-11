export interface Persona{
    id:number
    nombre: string
    apellido: string
    edad: number
}

export let listaPersonas: Persona[] = [
    {
        id:1,
        nombre:'Agustina',
        apellido:'Perez',
        edad:28
    },
    {
        id:2,
        nombre:'Sergio',
        apellido:'Rodriguez',
        edad:23
    },
    {
        id:3,
        nombre:'Lucia',
        apellido:'Gomez',
        edad:31
    },
    {
        id:4,
        nombre:'Analia',
        apellido:'Suarez',
        edad:31
    },
    {
        id:5,
        nombre:'Mauricio',
        apellido:'Sanchez',
        edad:31
    },
]