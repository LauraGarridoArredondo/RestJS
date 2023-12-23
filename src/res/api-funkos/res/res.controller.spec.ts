import { Test, TestingModule } from '@nestjs/testing'
import { ResController } from './res.controller'
import { ResService } from './res.service'
import { AlwaysAllowGuard } from '../Guards/AlwaysAllowGuard'

// Mock del servicio
class ResServiceMock {
  findAll = jest.fn()
  findOne = jest.fn()
  create = jest.fn()
  update = jest.fn()
  remove = jest.fn()
}

describe('ResController', () => {
  let controller: ResController
  let service: ResServiceMock

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResController],
      providers: [
        {
          provide: ResService,
          useClass: ResServiceMock,
        },
      ],
    })
      .overrideGuard(AlwaysAllowGuard)
      .useValue({ canActivate: () => true })
      .compile()

    controller = module.get<ResController>(ResController)
    service = module.get<ResServiceMock>(ResService)
  })

  describe('findAll', () => {
    it('Deberia devolver un array de Funkos', () => {
      const resArray = [{ id: 1, name: 'Funko 1' }]
      service.findAll.mockReturnValue(resArray)

      const result = controller.findAll()

      expect(result).toEqual(resArray)
      expect(service.findAll).toHaveBeenCalled()
    })
  })

  describe('findOne', () => {
    it('Deberia devolver un Funko por su ID', () => {
      const resItem = { id: 1, name: 'Funko 1' }
      service.findOne.mockReturnValue(resItem)

      const result = controller.findOne(1)

      expect(result).toEqual(resItem)
      expect(service.findOne).toHaveBeenCalledWith(1)
    })
  })

  describe('create', () => {
    it('Deberia crear un nuevo Funko', () => {
      const createReDtoMock = {
        nombre: 'Nuevo Funko',
        precio: 20.99,
        categoria: {
          nombre: 'Categoría Ejemplo',
          isactive: true,
          categoriaid: 1,
        },
        cantidad: 10,
        imagen: 'url_de_la_imagen',
      }

      const resItem = { id: 1, ...createReDtoMock }
      service.create.mockReturnValue(resItem)

      const result = controller.create(createReDtoMock)

      expect(result).toEqual(resItem)
      expect(service.create).toHaveBeenCalledWith(createReDtoMock)
    })
  })

  describe('update', () => {
    it('Deberia actualizar un Funko con su ID', () => {
      const updateReDtoMock = {
        id: 1,
        nombre: 'Funko Actualizado',
        precio: 25.99,
        cantidad: 15,
        imagen: 'url_de_la_imagen',
        categoria: {
          nombre: 'Categoría Actualizada',
          isactive: true,
          categoriaid: 2,
        },
      }

      const resItem = { id: 1, ...updateReDtoMock }
      service.update.mockReturnValue(resItem)

      const result = controller.update(1, updateReDtoMock)

      expect(result).toEqual(resItem)
      expect(service.update).toHaveBeenCalledWith(1, updateReDtoMock)
    })
  })

  describe('remove', () => {
    it('Deberia eliminar un funko por su id', () => {
      const id = 1
      controller.remove(id)
      expect(service.remove).toHaveBeenCalledWith(id)
    })
  })
})
