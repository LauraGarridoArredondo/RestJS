import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { ResService } from './res.service'
import { CreateReDto } from './dto/create-re.dto'
import { UpdateReDto } from './dto/update-re.dto'
import { Re } from './entities/re.entity'
import { AlwaysAllowGuard } from '../Guards/AlwaysAllowGuard'

@Controller('res')
@UseGuards(AlwaysAllowGuard)
export class ResController {
  private readonly logger: Logger = new Logger(ResController.name)

  constructor(private readonly resService: ResService) {}

  @Get()
  findAll(): Re[] {
    this.logger.log('Obteniendo todos los funkos')
    return this.resService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Re {
    this.logger.log(`Obteniendo funko con ID: ${id}`)
    return this.resService.findOne(id)
  }

  @Post()
  @HttpCode(201)
  create(@Body() createReDto: CreateReDto): Re {
    this.logger.log('Creando un nuevo funko')
    return this.resService.create(createReDto)
  }

  @Put(':id')
  @HttpCode(200)
  update(@Param('id') id: number, @Body() updateReDto: UpdateReDto): Re {
    this.logger.log(`Actualizando funko con ID: ${id}`)
    return this.resService.update(id, updateReDto)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number): void {
    this.logger.log(`Eliminando funko con ID: ${id}`)
    this.resService.remove(id)
  }
}
