import { Injectable } from '@nestjs/common';
import { CreateTrainsSheduleDto } from './dto/create-trains-shedule.dto';
import { UpdateTrainsSheduleDto } from './dto/update-trains-shedule.dto';

@Injectable()
export class TrainsShedulesService {
  create(createTrainsSheduleDto: CreateTrainsSheduleDto) {
    return 'This action adds a new trainsShedule';
  }

  findAll() {
    return `This action returns all trainsShedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainsShedule`;
  }

  update(id: number, updateTrainsSheduleDto: UpdateTrainsSheduleDto) {
    return `This action updates a #${id} trainsShedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainsShedule`;
  }
}
