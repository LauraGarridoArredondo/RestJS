import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity('categoria')
export class categoria {
  @PrimaryGeneratedColumn()
  categoriaid: number
  @Column('varchar', { length: 255, nullable: false, name: 'Nombre_Categoria' })
  nombre: string
  fecha_creacion: Date
  fecha_actualizacion: Date
  @Column('varchar', {
    length: 150,
    nullable: false,
    name: 'isActive_Categorias',
    default: false,
  })
  isactive: boolean
}
