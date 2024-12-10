import { Test, TestingModule } from '@nestjs/testing';
import { TrainsShedulesService } from './trains-shedules.service';

describe('TrainsShedulesService', () => {
  let service: TrainsShedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainsShedulesService],
    }).compile();

    service = module.get<TrainsShedulesService>(TrainsShedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
