import { Test, TestingModule } from '@nestjs/testing';
import { ReservaDataService } from './reserva-data.service';

describe('ReservaDataService', () => {
  let service: ReservaDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservaDataService]
    }).compile();

    service = module.get<ReservaDataService>(ReservaDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
