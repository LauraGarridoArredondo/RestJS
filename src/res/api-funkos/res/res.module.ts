import { Logger, Module } from '@nestjs/common'
import { ResService } from './res.service'
import { ResController } from './res.controller'

@Module({
  controllers: [ResController],
  providers: [ResService, Logger],
})
export class ResModule {}
