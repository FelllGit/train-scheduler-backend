import { PartialType } from '@nestjs/swagger';
import { CreateTrainsSheduleDto } from './create-trains-shedule.dto';

export class UpdateTrainsSheduleDto extends PartialType(CreateTrainsSheduleDto) {}
