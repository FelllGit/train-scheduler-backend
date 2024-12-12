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
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';
import { RolesGuard } from '../guards/role.guard';

@UseGuards(JwtAuthGuard)
@Controller('train-schedules')
export class TrainsSchedulesController {
  constructor(private readonly trainsShedulesService: TrainsSchedulesService) {}

  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
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

  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainsSheduleDto: UpdateTrainsSheduleDto,
  ) {
    return this.trainsShedulesService.update(+id, updateTrainsSheduleDto);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainsShedulesService.remove(+id);
  }
}
