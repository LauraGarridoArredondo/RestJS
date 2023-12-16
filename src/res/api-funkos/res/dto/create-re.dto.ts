import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export enum categoria {
  Marvel = 'Marvel',
  DC = 'DC',
  Otros = 'Otros',
}

export class CreateReDto {
  @IsNotEmpty({ message: 'El nombre no es nulo' })
  @IsString()
  nombre: string
  @IsNotEmpty()
  @IsNumber()
  precio: number
  @IsNotEmpty()
  @IsEnum(categoria)
  categoria: categoria
  @IsNotEmpty()
  @IsNumber()
  cantidad: number
  @IsNotEmpty()
  @IsString()
  imagen: string
  fecha_creacion: Date
  fecha_actualizacion: Date
}
