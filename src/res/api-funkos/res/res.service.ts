import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateReDto } from './dto/create-re.dto';
import { UpdateReDto } from './dto/update-re.dto';
import { Re } from './entities/re.entity';

@Injectable()
export class ResService {
  private readonly res: Re[] = [];

  constructor(private readonly logger: Logger) {}

  findAll(): Re[] {
    this.logger.log('Obteniendo todos los funkos');
    return this.res;
  }

  findOne(id: number): Re {
    this.logger.log(`Obteniendo funko con ID: ${id}`);
    const re = this.res.find((r) => r.id === id);
    if (!re) {
      throw new NotFoundException(`Funko con id ${id} no encontrado`);
    }
    return re;
  }

  create(createReDto: CreateReDto): Re {
    this.logger.log('Creando un nuevo funko');
    const { categoria, ...restDto } = createReDto;

    const re: Re = {
      id: this.res.length + 1,
      ...restDto,
      categoria: {
        categoriaid: categoria.categoriaid,
        nombre: categoria.nombre,
        isactive: categoria.isactive,
      },
      fecha_creacion: new Date(),
      fecha_actualizacion: new Date(),
    };

    this.res.push(re);
    return re;
  }
  update(id: number, updateReDto: UpdateReDto): Re {
    this.logger.log(`Actualizando funko con ID: ${id}`);
    const reIndex = this.res.findIndex((r) => r.id == id);
    if (reIndex == 1) {
      throw new NotFoundException(`Funko con id ${id} no encontrado`);
    }

    const updatedRe: Re = {
      ...this.res[reIndex],
      ...updateReDto,
      fecha_actualizacion: new Date(),
    };

    this.res[reIndex] = updatedRe;
    return updatedRe;
  }

  remove(id: number): void {
    this.logger.log(`Eliminando funko con ID: ${id}`);
    const reIndex = this.res.findIndex((r) => r.id == id);
    this.logger.log(`Índice del funko con ID ${id}: ${reIndex}`);
    if (reIndex == -1) {
      this.logger.log(`Funko con ID ${id} no encontrado`);
      throw new NotFoundException(`Funko con id ${id} no encontrado`);
    }

    this.res.splice(reIndex, 1);
  }

}
