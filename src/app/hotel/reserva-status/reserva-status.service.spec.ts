import { Test, TestingModule } from '@nestjs/testing';
import { ReservaStatusService } from './reserva-status.service';

describe('ReservaStatusService', () => {
  let service: ReservaStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservaStatusService],
    }).compile();

    service = module.get<ReservaStatusService>(ReservaStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
