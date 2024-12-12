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
  ValidationPipe,
} from '@nestjs/common';
import { TrainsSchedulesService } from './trains-schedules.service';
import { CreateTrainsSheduleDto } from './dto/create-trains-shedule.dto';
import { UpdateTrainsSheduleDto } from './dto/update-trains-shedule.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { FindAllQueryDto } from './dto/find-all-query.dto';

@Controller('trains-schedules')
export class TrainsSchedulesController {
  constructor(
    private readonly trainsSchedulesService: TrainsSchedulesService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTrainsSheduleDto: CreateTrainsSheduleDto) {
    return this.trainsSchedulesService.create(createTrainsSheduleDto);
  }

  @Get()
  findAll(
    @Query(new ValidationPipe({ transform: true })) query: FindAllQueryDto,
  ) {
    return this.trainsSchedulesService.findAll(query);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainsSheduleDto: UpdateTrainsSheduleDto,
  ) {
    return this.trainsSchedulesService.update(+id, updateTrainsSheduleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainsSchedulesService.remove(+id);
  }
}
