import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrainsSheduleDto } from './dto/create-trains-shedule.dto';
import { UpdateTrainsSheduleDto } from './dto/update-trains-shedule.dto';
import { TrainsSchedule } from './entities/trains-schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindOptionsWhere, Repository } from 'typeorm';
import { Train } from '../trains/entities/train.entity';
import { endOfDay, startOfDay } from 'date-fns';
import { FindAllQueryDto } from './dto/find-all-query.dto';

@Injectable()
export class TrainsSchedulesService {
  constructor(
    @InjectRepository(TrainsSchedule)
    private trainsScheduleRepository: Repository<TrainsSchedule>,
    @InjectRepository(Train)
    private trainRepository: Repository<Train>,
  ) {}

  async create(createTrainsSheduleDto: CreateTrainsSheduleDto) {
    const { trainId, ...rest } = createTrainsSheduleDto;

    const train = await this.trainRepository.findOne({
      where: { id: trainId },
    });

    if (!train) {
      throw new NotFoundException(`Train with id ${trainId} not found`);
    }

    const schedule = this.trainsScheduleRepository.create({
      ...rest,
      train,
    });

    return this.trainsScheduleRepository.save(schedule);
  }

  findAll(findAllQueryDto: FindAllQueryDto) {
    const { from, to, scheduledDate, trainId } = findAllQueryDto;
    const date = new Date(scheduledDate);
    const startOfTheDay = startOfDay(date);
    const endOfTheDay = endOfDay(date);

    const searchCriteria: FindOptionsWhere<TrainsSchedule> = {
      from,
      to,
      scheduledDate: Between(startOfTheDay, endOfTheDay),
      train: { id: trainId },
    };

    return this.trainsScheduleRepository.find({ where: searchCriteria });
  }

  update(id: number, updateTrainsSheduleDto: UpdateTrainsSheduleDto) {
    return this.trainsScheduleRepository.update(id, updateTrainsSheduleDto);
  }

  remove(id: number) {
    return this.trainsScheduleRepository.delete(id);
  }
}
