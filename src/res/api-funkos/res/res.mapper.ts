import { Injectable } from '@nestjs/common'
import { Re } from './entities/re.entity'
import { CreateReDto } from './dto/create-re.dto'
import { UpdateReDto } from './dto/update-re.dto'

@Injectable()
export class FunkoMapper {
  mapToDTOcreate(res: Re): CreateReDto {
    const dto = new CreateReDto()
    dto.categoria = res.categoria
    dto.nombre = res.nombre
    dto.precio = res.precio
    dto.cantidad = res.cantidad
    dto.imagen = res.imagen
    dto.fecha_creacion = res.fecha_creacion
    dto.fecha_actualizacion = res.fecha_actualizacion
    return dto
  }

  mapToDTOupdate(res: Re): UpdateReDto {
    const dto = new UpdateReDto()
    dto.id = res.id
    dto.categoria = res.categoria
    dto.nombre = res.nombre
    dto.precio = res.precio
    dto.cantidad = res.cantidad
    dto.imagen = res.imagen
    return dto
  }
}
