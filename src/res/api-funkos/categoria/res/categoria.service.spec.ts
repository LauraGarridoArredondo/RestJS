import { Test, TestingModule } from '@nestjs/testing'
import { CategoriaService } from './categoria.service'
import { Logger, NotFoundException } from '@nestjs/common'
import { categoria } from './entities/categoria.entity'

// Mock de Logger
class LoggerMock {
  log = jest.fn()
  error = jest.fn()
}

describe('CategoriaService', () => {
  let service: CategoriaService
  let logger: LoggerMock

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaService, { provide: Logger, useClass: LoggerMock }],
    }).compile()

    service = module.get<CategoriaService>(CategoriaService)
    logger = module.get(Logger) // No es necesario utilizar LoggerMock aquí
  })

  describe('getAllCategorias', () => {
    it('Deberia devolver un array de categorias', async () => {
      const result = await service.getAllCategorias()
      expect(result).toEqual([])
      expect(logger.log).toHaveBeenCalledWith('Obteniendo todas las categorías')
    })
  })

  describe('getCategoriaById', () => {
    it('Deberia devolver una categoria por su ID', async () => {
      const categoriaMock: categoria = {
        categoriaid: 1,
        nombre: 'Categoria 1',
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        isactive: true,
      }

      service['categorias'] = [categoriaMock]

      const result = await service.getCategoriaById(1)

      expect(result).toEqual(categoriaMock)
      expect(logger.log).toHaveBeenCalledWith('Obteniendo categoría con ID: 1')
    })
  })

  describe('createCategoria', () => {
    it('Debería crear una categoria', async () => {
      const createCategoriaDtoMock: Partial<categoria> = {
        nombre: 'Nueva Categoria',
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        isactive: true,
      }

      const result = await service.createCategoria(
        createCategoriaDtoMock as categoria,
      )

      expect(service['categorias']).toHaveLength(1)
      expect(logger.log).toHaveBeenCalledWith('Creando nueva categoría')
    })
  })

  describe('updateCategoria', () => {
    it('Deberia actualizar una categoria por su ID', async () => {
      const categoriaExistente: categoria = {
        categoriaid: 1,
        nombre: 'Categoria Existente',
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        isactive: true,
      }

      service['categorias'] = [categoriaExistente]

      const updateCategoriaDtoMock: Partial<categoria> = {
        nombre: 'Categoria Actualizada',
      }

      const result = await service.updateCategoria(
        1,
        updateCategoriaDtoMock as categoria,
      )

      expect(result).toEqual({
        categoriaid: 1,
        nombre: 'Categoria Actualizada',
        fecha_creacion: expect.any(Date),
        fecha_actualizacion: expect.any(Date),
        isactive: true,
      })
      expect(logger.log).toHaveBeenCalledWith(
        'Actualizando categoría con ID: 1',
      )
    })
  })

  describe('deleteCategoria', () => {
    it('Deberia eliminar una categoria por su id', async () => {
      const categoriaExistente: categoria = {
        categoriaid: 1,
        nombre: 'Categoria Existente',
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        isactive: true,
      }

      service['categorias'] = [categoriaExistente]

      const result = await service.deleteCategoria(1)

      expect(result).toBeUndefined()
      expect(service['categorias']).toHaveLength(0)
      expect(logger.log).toHaveBeenCalledWith('Eliminando categoría con ID: 1')
    })
  })
})
