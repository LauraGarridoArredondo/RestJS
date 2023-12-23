import { CategoriaCreateDTO } from '../../categoria/res/dto/CategoriaCreateDTO'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity('funkos')
export class Re {
  @PrimaryGeneratedColumn()
  id: number
  categoria: CategoriaCreateDTO
  @Column('varchar', { length: 255, nullable: false, name: 'Nombre' })
  nombre: string
  precio: number
  cantidad: number
  @Column('varchar', { length: 255, nullable: false, name: 'imagen' })
  imagen: string
  fecha_creacion: Date
  fecha_actualizacion: Date
}
