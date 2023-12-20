import { PartialType } from '@nestjs/mapped-types'
import { CreateReDto } from './create-re.dto'
import { IsEnum, IsNumber, IsString } from 'class-validator'
import { categoria } from '../../categoria/res/entities/categoria.entity'

export class UpdateReDto extends PartialType(CreateReDto) {
  id: number
  @IsEnum(categoria)
  categoria: categoria
  @IsString({ message: 'Evite escribir numeros en el nombre' })
  nombre: string
  @IsNumber()
  precio: number
  @IsNumber()
  cantidad: number
  @IsString({ message: 'Por ahora evite los numeros' })
  imagen: string
}
