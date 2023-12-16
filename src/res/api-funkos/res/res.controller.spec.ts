import { Test, TestingModule } from '@nestjs/testing'
import { ResController } from './res.controller'
import { ResService } from './res.service'
import { Logger } from '@nestjs/common'

describe('ResController', () => {
  let controller: ResController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResController],
      providers: [ResService, Logger],
    }).compile()

    controller = module.get<ResController>(ResController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
