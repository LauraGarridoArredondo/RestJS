import {CategoriaCreateDTO} from "../../categoria/res/dto/CategoriaCreateDTO";

export class Re {
  id: number
  categoria: CategoriaCreateDTO
  nombre: string
  precio: number
  cantidad: number
  imagen: string
  fecha_creacion: Date
  fecha_actualizacion: Date
}
