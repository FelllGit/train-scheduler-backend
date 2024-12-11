import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { TrainsSchedulesService } from './trains-schedules.service';
import { CreateTrainsSheduleDto } from './dto/create-trains-shedule.dto';
import { UpdateTrainsSheduleDto } from './dto/update-trains-shedule.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('trains-schedules')
export class TrainsSchedulesController {
  constructor(private readonly trainsShedulesService: TrainsSchedulesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTrainsSheduleDto: CreateTrainsSheduleDto) {
    return this.trainsShedulesService.create(createTrainsSheduleDto);
  }

  @Get()
  findAll(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('scheduledDate') scheduledDate: string,
    @Query('trainId') trainId: number,
  ) {
    return this.trainsShedulesService.findAll(from, to, scheduledDate, trainId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainsSheduleDto: UpdateTrainsSheduleDto,
  ) {
    return this.trainsShedulesService.update(+id, updateTrainsSheduleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainsShedulesService.remove(+id);
  }
}
