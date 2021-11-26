import { Test, TestingModule } from '@nestjs/testing';
import { CoreModule } from '../../../core/core.module';
import { QuartoDataService } from './quarto-data.service';

describe('QuartoDataService', () => {
  let service: QuartoDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CoreModule],
      providers: [QuartoDataService]
    }).compile();

    service = module.get<QuartoDataService>(QuartoDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
