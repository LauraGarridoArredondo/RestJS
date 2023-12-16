import {PartialType} from '@nestjs/mapped-types'
import {CreateReDto} from './create-re.dto'
import {IsEnum, IsNumber, IsString} from 'class-validator'

export enum categoria {
    Marvel = 'Marvel',
    DC = 'DC',
    Otros = 'Otros',
}

export class UpdateReDto extends PartialType(CreateReDto) {
    id: number
    @IsEnum(categoria)
    categoria: categoria
    @IsString()
    nombre: string
    @IsNumber()
    precio: number
    @IsNumber()
    cantidad: number
    @IsString()
    imagen: string
}
