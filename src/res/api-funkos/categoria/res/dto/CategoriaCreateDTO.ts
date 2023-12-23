import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class CategoriaCreateDTO {
  @IsNotEmpty({ message: 'El nombre no puede ir vacio' })
  @IsString({ message: 'No adjunte numeros en el nombre' })
  nombre: string
  @IsNotEmpty({ message: 'El estado no puede ir vacío' })
  @IsBoolean({ message: 'El estado debe ser un valor booleano' })
  isactive: boolean
  categoriaid: number
}
