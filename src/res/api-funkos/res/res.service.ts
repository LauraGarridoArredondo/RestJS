import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateReDto } from './dto/create-re.dto'
import { UpdateReDto } from './dto/update-re.dto'
import { Re } from './entities/re.entity'

@Injectable()
export class ResService {
  private readonly res: Re[] = []

  create(createReDto: CreateReDto): Re {
    const re: Re = {
      id: this.res.length + 1,
      ...createReDto,
      fecha_creacion: new Date(),
      fecha_actualizacion: new Date(),
    }

    this.res.push(re)
    return re
  }

  findAll(): Re[] {
    return this.res
  }

  findOne(id: number): Re {
    const re = this.res.find((r) => r.id === id)
    if (!re) {
      throw new NotFoundException(`Re con id ${id} no encontrado`)
    }
    return re
  }

  update(id: number, updateReDto: UpdateReDto): Re {
    const reIndex = this.res.findIndex((r) => r.id === id)
    if (reIndex === -1) {
      throw new NotFoundException(`Re con id ${id} no encontrado`)
    }

    const updatedRe = {
      ...this.res[reIndex],
      ...updateReDto,
      fecha_actualizacion: new Date(),
    }

    this.res[reIndex] = updatedRe
    return updatedRe
  }

  remove(id: number): void {
    const reIndex = this.res.findIndex((r) => r.id === id)
    if (reIndex === -1) {
      throw new NotFoundException(`Re con id ${id} no encontrado`)
    }

    this.res.splice(reIndex, 1)
  }
}
