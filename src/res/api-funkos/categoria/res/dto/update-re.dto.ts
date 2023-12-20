import { PartialType } from '@nestjs/mapped-types'
import { CreateReDto } from './create-re.dto'
import { IsBoolean, IsString } from 'class-validator'

export class UpdateReDto extends PartialType(CreateReDto) {
  categoriaid: number
  @IsString({ message: 'No adjunte numeros en el nombre' })
  nombre: string
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  isactive: boolean
}
