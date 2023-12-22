import { PartialType } from '@nestjs/mapped-types'
import { CategoriaCreateDTO } from './CategoriaCreateDTO'
import { IsBoolean, IsString } from 'class-validator'

export class CategoriaUpdateDTO extends PartialType(CategoriaCreateDTO) {
  @IsString({ message: 'No adjunte numeros en el nombre' })
  nombre?: string
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  isactive?: boolean
}
