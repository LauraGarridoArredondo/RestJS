import { Test, TestingModule } from '@nestjs/testing'
import { ResService } from './res.service'
import { Logger } from '@nestjs/common'

describe('ResService', () => {
  let service: ResService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResService, Logger],
    }).compile()

    service = module.get<ResService>(ResService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
