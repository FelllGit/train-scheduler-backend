import { Injectable } from '@nestjs/common';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Train } from './entities/train.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrainsService {
  constructor(
    @InjectRepository(Train) private trainRepository: Repository<Train>,
  ) {}

  create(createTrainDto: CreateTrainDto) {
    return this.trainRepository.save(createTrainDto);
  }

  findAll(name: string) {
    return this.trainRepository.find({ where: { name: name } });
  }

  update(id: number, updateTrainDto: UpdateTrainDto) {
    return this.trainRepository.update(id, updateTrainDto);
  }

  remove(id: number) {
    return this.trainRepository.delete(id);
  }
}
