export class Re {
  id: number
  categoria: categoria
  nombre: string
  precio: number
  cantidad: number
  imagen: string
  fecha_creacion: Date
  fecha_actualizacion: Date
}

export enum categoria {
  Marvel = 'Marvel',
  DC = 'DC',
  Otros = 'Otros',
}
