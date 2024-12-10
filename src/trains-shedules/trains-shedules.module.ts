import { Module } from '@nestjs/common';
import { TrainsShedulesService } from './trains-shedules.service';
import { TrainsShedulesController } from './trains-shedules.controller';

@Module({
  controllers: [TrainsShedulesController],
  providers: [TrainsShedulesService],
})
export class TrainsShedulesModule {}
