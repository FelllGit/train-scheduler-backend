import { Test, TestingModule } from '@nestjs/testing';
import { TrainsShedulesController } from './trains-shedules.controller';
import { TrainsShedulesService } from './trains-shedules.service';

describe('TrainsShedulesController', () => {
  let controller: TrainsShedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainsShedulesController],
      providers: [TrainsShedulesService],
    }).compile();

    controller = module.get<TrainsShedulesController>(TrainsShedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
