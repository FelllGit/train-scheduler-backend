// src/trains-schedules/dto/update-trains-schedule.dto.ts
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTrainsSheduleDto } from './create-trains-shedule.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateTrainsSheduleDto extends PartialType(
  CreateTrainsSheduleDto,
) {
  @ApiProperty({ required: false, description: 'Train id' })
  @IsOptional()
  @IsNumber()
  trainId?: number;
}
