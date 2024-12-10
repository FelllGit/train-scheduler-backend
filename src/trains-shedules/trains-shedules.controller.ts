import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainsShedulesService } from './trains-shedules.service';
import { CreateTrainsSheduleDto } from './dto/create-trains-shedule.dto';
import { UpdateTrainsSheduleDto } from './dto/update-trains-shedule.dto';

@Controller('trains-shedules')
export class TrainsShedulesController {
  constructor(private readonly trainsShedulesService: TrainsShedulesService) {}

  @Post()
  create(@Body() createTrainsSheduleDto: CreateTrainsSheduleDto) {
    return this.trainsShedulesService.create(createTrainsSheduleDto);
  }

  @Get()
  findAll() {
    return this.trainsShedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainsShedulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainsSheduleDto: UpdateTrainsSheduleDto) {
    return this.trainsShedulesService.update(+id, updateTrainsSheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainsShedulesService.remove(+id);
  }
}
