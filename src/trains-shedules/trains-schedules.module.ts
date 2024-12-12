import { Module } from '@nestjs/common';
import { TrainsSchedulesService } from './trains-schedules.service';
import { TrainsSchedulesController } from './trains-schedules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainsShedule } from './entities/trains-schedule.entity';
import { Train } from '../trains/entities/train.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainsShedule, Train])],
  controllers: [TrainsSchedulesController],
  providers: [TrainsSchedulesService],
})
export class TrainsSchedulesModule {}
