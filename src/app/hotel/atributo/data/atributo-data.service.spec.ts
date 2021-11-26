import { Test, TestingModule } from '@nestjs/testing';
import { CoreModule } from 'src/app/core/core.module';
import { AtributoDataService } from './atributo-data.service';

describe('AtributoDataService', () => {
  let service: AtributoDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CoreModule],
      providers: [AtributoDataService]
    }).compile();

    service = module.get<AtributoDataService>(AtributoDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
