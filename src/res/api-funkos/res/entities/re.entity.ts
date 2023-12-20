import { categoria } from '../../categoria/res/entities/categoria.entity'

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
