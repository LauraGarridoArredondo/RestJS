import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common'
import { ResService } from './res.service'
import { CreateReDto } from './dto/create-re.dto'
import { UpdateReDto } from './dto/update-re.dto'
import { Re } from './entities/re.entity'

@Controller('res')
export class ResController {
  constructor(private readonly resService: ResService) {}

  @Get()
  findAll(): Re[] {
    return this.resService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number): Re {
    return this.resService.findOne(id)
  }

  @Post()
  create(@Body() createReDto: CreateReDto): Re {
    return this.resService.create(createReDto)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateReDto: UpdateReDto): Re {
    return this.resService.update(id, updateReDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.resService.remove(id)
  }
}
