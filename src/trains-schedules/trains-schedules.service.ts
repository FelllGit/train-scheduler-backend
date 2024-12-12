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

    const searchCriteria: FindOptionsWhere<TrainsSchedule> = {};

    if (from) searchCriteria.from = from;
    if (to) searchCriteria.to = to;
    if (trainId) searchCriteria.train = { id: trainId };

    if (scheduledDate) {
      const date = new Date(scheduledDate);
      if (!isNaN(date.getTime())) {
        // Check if the date is valid
        const startOfTheDay = startOfDay(date);
        const endOfTheDay = endOfDay(date);
        searchCriteria.scheduledDate = Between(startOfTheDay, endOfTheDay);
      }
    }

    return this.trainsScheduleRepository.find({
      where: searchCriteria,
      relations: ['train'],
    });
  }

  async update(
    id: number,
    updateTrainsSheduleDto: UpdateTrainsSheduleDto,
  ): Promise<TrainsSchedule> {
    const { trainId, ...updateData } = updateTrainsSheduleDto;

    const existingSchedule = await this.trainsScheduleRepository.findOne({
      where: { id },
      relations: ['train'],
    });

    if (!existingSchedule) {
      throw new NotFoundException(`TrainsSchedule with id ${id} not found`);
    }

    // Якщо trainId передано, оновлюємо зв'язок з Train
    if (trainId) {
      existingSchedule.train = { id: trainId } as any; // Використовуйте 'any', щоб уникнути TypeScript помилок
    }

    // Оновлюємо інші поля
    Object.assign(existingSchedule, updateData);

    return this.trainsScheduleRepository.save(existingSchedule);
  }

  remove(id: number) {
    return this.trainsScheduleRepository.delete(id);
  }
}
