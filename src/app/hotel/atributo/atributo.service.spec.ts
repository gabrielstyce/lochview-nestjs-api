import { Test, TestingModule } from '@nestjs/testing';
import { AtributoDataService } from './data/atributo-data.service';
import { AtributoService } from './atributo.service';
import { CoreModule } from 'src/app/core/core.module';

describe('AtributoService', () => {
  let service: AtributoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CoreModule],
      providers: [AtributoService, AtributoDataService]
    }).compile();

    service = module.get<AtributoService>(AtributoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
