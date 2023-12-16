import { Logger, Module } from '@nestjs/common'
import { ResModule } from './res/api-funkos/res/res.module'
import { ResController } from './res/api-funkos/res/res.controller'
import { FunkoMapper } from './res/api-funkos/res/res.mapper'
import { ResService } from './res/api-funkos/res/res.service'

@Module({
  imports: [ResModule],
  controllers: [ResController],
  providers: [FunkoMapper, ResService, Logger],
})
export class AppModule {}
