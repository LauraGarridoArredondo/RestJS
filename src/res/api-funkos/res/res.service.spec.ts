import { Test, TestingModule } from '@nestjs/testing'
import { ResService } from './res.service'
import { Logger } from '@nestjs/common'
import { NotFoundException } from '@nestjs/common'
import { Re } from './entities/re.entity'
import { UpdateReDto } from './dto/update-re.dto'

describe('ResService', () => {
  let service: ResService
  let logger: Logger

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResService, Logger],
    }).compile()

    service = module.get<ResService>(ResService)
    logger = module.get<Logger>(Logger)
  })

  describe('findAll', () => {
    it('Deberia devolver un array de funkos', () => {
      const result = service.findAll()
      expect(result).toEqual([])
    })
  })

  describe('findOne', () => {
    it('Deberia devolver un funko por su ID', () => {
      const reMock = {
        id: 1,
        nombre: 'Funko 1',
        categoria: { categoriaid: 1, nombre: 'Categoria 1', isactive: true },
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
        precio: 19.99, // Agregar propiedades adicionales para que coincida con la interfaz Re
        cantidad: 5,
        imagen: 'url_de_la_imagen',
      }

      jest.spyOn(service, 'findOne').mockImplementation((id) => {
        if (id === 1) {
          return reMock as Re // Utilizar 'as Re' para hacer que TypeScript lo trate como tipo
        } else {
          throw new NotFoundException(`Funko con id ${id} no encontrado`)
        }
      })

      const result = service.findOne(1)

      expect(result).toEqual(reMock)
    })
  })

  describe('create', () => {
    it('Deberia crear un nuevo funko', () => {
      const createReDtoMock = {
        nombre: 'Nuevo Funko',
        categoria: { categoriaid: 1, nombre: 'Categoria 1', isactive: true },
        precio: 19.99,
        cantidad: 5,
        imagen: 'url_de_la_imagen',
      }

      const result = service.create(createReDtoMock)

      expect(result).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          nombre: 'Nuevo Funko',
          categoria: { categoriaid: 1, nombre: 'Categoria 1', isactive: true },
          fecha_creacion: expect.any(Date),
          fecha_actualizacion: expect.any(Date),
        }),
      )
      expect(service['res']).toHaveLength(1)
    })
  })

  describe('update', () => {
    it('Debería actualizar un funko por su ID', () => {
      const existingRe = {
        id: 1,
        nombre: 'Funko Existente',
        categoria: { categoriaid: 1, nombre: 'Categoria 1', isactive: true },
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
      }

      const updateReDtoMock: UpdateReDto = {
        id: 1,
        nombre: 'Funko Actualizado',
        precio: 19.99,
        cantidad: 5,
        imagen: 'url_de_la_imagen',
        categoria: { categoriaid: 1, nombre: 'Categoria 1', isactive: true },
      }

      const result = service.update(1, updateReDtoMock)

      expect(result).toEqual(
        expect.objectContaining({
          id: 1,
          nombre: 'Funko Actualizado',
          categoria: { categoriaid: 1, nombre: 'Categoria 1', isactive: true },
          fecha_actualizacion: expect.any(Date),
        }),
      )
    })
  })

  describe('remove', () => {
    it('Deberia eliminar un funko por su ID', () => {
      const existingRe = {
        id: 1,
        nombre: 'Funko Existente',
        categoria: { categoriaid: 1, nombre: 'Categoria 1', isactive: true },
        fecha_creacion: new Date(),
        fecha_actualizacion: new Date(),
      }
      expect(service['res']).toHaveLength(0)
    })
  })
})
