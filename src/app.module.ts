import { Logger, Module } from '@nestjs/common'
import { ResModule } from './res/api-funkos/res/res.module'
import { ResController } from './res/api-funkos/res/res.controller'
import { FunkoMapper } from './res/api-funkos/res/res.mapper'
import { ResService } from './res/api-funkos/res/res.service'
import { CategoriaModule } from './res/api-funkos/categoria/res/categoria.module'
import { CategoriaController } from './res/api-funkos/categoria/res/categoria.controller'
import { CategoriaService } from './res/api-funkos/categoria/res/categoria.service'

@Module({
  imports: [ResModule, CategoriaModule],
  controllers: [ResController, CategoriaController],
  providers: [FunkoMapper, ResService, Logger, CategoriaService],
})
export class AppModule {}
