import { Test, TestingModule } from '@nestjs/testing';
import { CoreModule } from 'src/app/core/core.module';
import { ImagemModule } from '../imagem/imagem.module';
import { QuartoDataService } from './data/quarto-data.service';
import { QuartoService } from './quarto.service';

describe('QuartoService', () => {
  let service: QuartoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, ImagemModule],
      providers: [QuartoService, QuartoDataService]
    }).compile();

    service = module.get<QuartoService>(QuartoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
