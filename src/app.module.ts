import { Module } from '@nestjs/common'
import { ResModule } from './res/api-funkos/res/res.module'

@Module({
  imports: [ResModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
