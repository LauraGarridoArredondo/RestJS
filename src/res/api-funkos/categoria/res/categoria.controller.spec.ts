import { Test, TestingModule } from '@nestjs/testing'
import { CategoriaController } from './categoria.controller'
import { CategoriaService } from './categoria.service'
import { AlwaysAllowGuard } from '../../Guards/AlwaysAllowGuard'
import { categoria } from './entities/categoria.entity'

// Mock del servicio
class CategoriaServiceMock {
  getAllCategorias = jest.fn()
  getCategoriaById = jest.fn()
  createCategoria = jest.fn()
  updateCategoria = jest.fn()
  deleteCategoria = jest.fn()
}

describe('CategoriaController', () => {
  let controller: CategoriaController
  let service: CategoriaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaController],
      providers: [
        {
          provide: CategoriaService,
          useClass: CategoriaServiceMock,
        },
      ],
    })
      .overrideGuard(AlwaysAllowGuard)
      .useValue({ canActivate: () => true })
      .compile()

    controller = module.get<CategoriaController>(CategoriaController)
    service = module.get<CategoriaService>(CategoriaService)
  })

  describe('getAllCategorias', () => {
    it('Deberia devolver un array de categorias', async () => {
      const categoriasMock: categoria[] = [
        {
          categoriaid: 1,
          nombre: 'Categoria 1',
          fecha_creacion: new Date(),
          fecha_actualizacion: new Date(),
          isactive: true,
        },
      ]

      jest.spyOn(service, 'getAllCategorias').mockResolvedValue(categoriasMock)

      const result = await controller.getAllCategorias()

      expect(result).toEqual(categoriasMock)
    })
  })

  describe('getCategoriaById', () => {
    it('Deberia devoler una categoria por ID', async () => {
      const categoriaMock: categoria = {
        categoriaid: 1,
        nombre: 'Categoria 1',
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        isactive: true,
      }

      jest.spyOn(service, 'getCategoriaById').mockResolvedValue(categoriaMock)

      const result = await controller.getCategoriaById(1)

      expect(result).toEqual(categoriaMock)
    })
  })

  describe('createCategoria', () => {
    it('Deberia crear una nueva categoria', async () => {
      const createCategoriaDtoMock: categoria = {
        categoriaid: 1,
        nombre: 'Categoria 1',
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        isactive: true,
      }

      const categoriaMock: categoria = {
        categoriaid: 1,
        nombre: 'Categoria 1',
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        isactive: true,
      }

      jest.spyOn(service, 'createCategoria').mockResolvedValue(categoriaMock)

      const result = await controller.createCategoria(createCategoriaDtoMock)

      expect(result).toEqual(categoriaMock)
    })
  })

  describe('updateCategoria', () => {
    it('should update a categoria by ID', async () => {
      const updateCategoriaDtoMock: categoria = {
        categoriaid: 1,
        nombre: 'Categoria Actualizada',
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        isactive: true,
      }

      const categoriaMock: categoria = {
        categoriaid: 1,
        nombre: 'Categoria Actualizada',
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        isactive: true,
      }

      jest.spyOn(service, 'updateCategoria').mockResolvedValue(categoriaMock)

      const result = await controller.updateCategoria(1, updateCategoriaDtoMock)

      expect(result).toEqual(categoriaMock)
    })
  })

  describe('deleteCategoria', () => {
    it('should delete a categoria by ID', async () => {
      const id = 1
      jest.spyOn(service, 'deleteCategoria').mockResolvedValue()

      await controller.deleteCategoria(id)

      expect(service.deleteCategoria).toHaveBeenCalledWith(id)
    })
  })
})
