import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
  Logger,
  HttpCode,
} from '@nestjs/common'
import { CategoriaService } from './categoria.service'
import { CreateReDto } from './dto/create-re.dto'
import { UpdateReDto } from './dto/update-re.dto'
import { categoria } from './entities/categoria.entity'
import { AlwaysAllowGuard } from '../../Guards/AlwaysAllowGuard'

@Controller('categoria')
@UseGuards(AlwaysAllowGuard)
export class CategoriaController {
  private readonly logger: Logger = new Logger(CategoriaController.name)
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  async getAllCategorias(): Promise<categoria[]> {
    this.logger.log('Obteniendo todos las categorias')
    return this.categoriaService.getAllCategorias()
  }
  @Get(':id')
  async getCategoriaById(@Param('id') id: number): Promise<categoria> {
    this.logger.log('Obteniendo categoria con id:${id}')
    return this.categoriaService.getCategoriaById(id)
  }
  @Post()
  @HttpCode(201)
  async createCategoria(
    @Body() createCategoriaDto: categoria,
  ): Promise<categoria> {
    this.logger.log('Creado la categoria')
    return this.categoriaService.createCategoria(createCategoriaDto)
  }
  @Put(':id')
  @HttpCode(200)
  async updateCategoria(
    @Param('id') id: number,
    @Body() updateCategoriaDto: categoria,
  ): Promise<categoria> {
    this.logger.log(`Actualizando categoria con ID: ${id}`)
    return this.categoriaService.updateCategoria(id, updateCategoriaDto)
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteCategoria(@Param('id') id: number): Promise<void> {
    this.logger.log(`Eliminando categoria con ID: ${id}`)
    return this.categoriaService.deleteCategoria(id)
  }
}
