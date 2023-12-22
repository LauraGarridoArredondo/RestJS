import { PartialType } from '@nestjs/mapped-types'
import { CreateReDto } from './create-re.dto'
import {IsNumber, IsString, ValidateNested} from 'class-validator'
import {CategoriaCreateDTO} from "../../categoria/res/dto/CategoriaCreateDTO";

export class UpdateReDto extends PartialType(CreateReDto) {
  id: number
  @IsString({ message: 'Evite escribir numeros en el nombre' })
  nombre: string
  @IsNumber()
  precio: number
  @IsNumber()
  cantidad: number
  @IsString({ message: 'Por ahora evite los numeros' })
  imagen: string
  @ValidateNested()
  categoria: CategoriaCreateDTO;
}
