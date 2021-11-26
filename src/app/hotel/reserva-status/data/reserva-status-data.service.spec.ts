import { Test, TestingModule } from '@nestjs/testing';
import { ReservaStatusDataService } from './reserva-status-data.service';

describe('ReservaStatusDataService', () => {
  let service: ReservaStatusDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservaStatusDataService]
    }).compile();

    service = module.get<ReservaStatusDataService>(ReservaStatusDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
