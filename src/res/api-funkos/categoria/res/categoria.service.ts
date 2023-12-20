import { Injectable, Logger } from '@nestjs/common'
import { categoria } from './entities/categoria.entity'

@Injectable()
export class CategoriaService {
  private categorias: categoria[] = []
  constructor(private readonly logger: Logger) {}
  getAllCategorias(): Promise<categoria[]> {
    try {
      this.logger.log('Obteniendo todas las categorías')
      return Promise.resolve(this.categorias)
    } catch (error) {
      this.logger.error(
        `Error al obtener todas las categorías: ${error.message}`,
      )
      throw error
    }
  }

  getCategoriaById(id: number): Promise<categoria> {
    try {
      this.logger.log(`Obteniendo categoría con ID: ${id}`)
      const categoriaEncontrada = this.categorias.find(
        (c) => c.categoriaid == id,
      )
      return Promise.resolve(categoriaEncontrada)
    } catch (error) {
      this.logger.error(
        `Error al obtener la categoría con ID ${id}: ${error.message}`,
      )
      throw error
    }
  }

  createCategoria(createCategoriaDto: categoria): Promise<categoria> {
    try {
      this.logger.log('Creando nueva categoría')
      const nuevaCategoria: categoria = {
        ...createCategoriaDto,
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
      }
      this.categorias.push(nuevaCategoria)
      return Promise.resolve(nuevaCategoria)
    } catch (error) {
      this.logger.error(`Error al crear una nueva categoría: ${error.message}`)
      throw error
    }
  }

  updateCategoria(
    id: number,
    updateCategoriaDto: categoria,
  ): Promise<categoria> {
    try {
      this.logger.log(`Actualizando categoría con ID: ${id}`)
      const index = this.categorias.findIndex((c) => c.categoriaid == id)
      if (index !== -1) {
        this.categorias[index] = {
          ...this.categorias[index],
          ...updateCategoriaDto,
          fecha_actualizacion: new Date(),
        }
        return Promise.resolve(this.categorias[index])
      }
      return Promise.resolve(null)
    } catch (error) {
      this.logger.error(
        `Error al actualizar la categoría con ID ${id}: ${error.message}`,
      )
      throw error
    }
  }

  deleteCategoria(id: number): Promise<void> {
    try {
      this.logger.log(`Eliminando categoría con ID: ${id}`)
      this.categorias = this.categorias.filter((c) => c.categoriaid !== id)
      return Promise.resolve()
    } catch (error) {
      this.logger.error(
        `Error al eliminar la categoría con ID ${id}: ${error.message}`,
      )
      throw error
    }
  }
}
