import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min, ValidateNested,
} from 'class-validator'

import { categoria } from '../../categoria/res/entities/categoria.entity'
import {CategoriaCreateDTO} from "../../categoria/res/dto/CategoriaCreateDTO";

export class CreateReDto {
  @IsNotEmpty({ message: 'El nombre no puede ir vacio' })
  @IsString({ message: 'No adjunte numeros en el nombre' })
  nombre: string
  @IsNotEmpty({ message: 'El precio no puede ir vacio' })
  @IsNumber()
  @Min(0, { message: 'Solo se puede aceptar numeros positivos' })
  @Max(100, { message: 'El precio maximo es hasta 100' })
  precio: number
  @ValidateNested()
  @IsNotEmpty({ message: 'La categoría no puede ir vacía' })
  categoria: CategoriaCreateDTO;
  @IsNotEmpty({ message: 'La cantidad no puede estar vacio' })
  @IsNumber()
  cantidad: number
  @IsNotEmpty({ message: 'La imagen no puede estar vacio' })
  @IsString({ message: 'La imagen es de tipo String' })
  imagen: string
}
