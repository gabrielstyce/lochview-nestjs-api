import { Test, TestingModule } from '@nestjs/testing';
import { CoreModule } from 'src/app/core/core.module';
import { ImagemDataService } from './data/imagem-data.service';
import { ImagemService } from './imagem.service';

describe('ImagemService', () => {
  let service: ImagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CoreModule],
      providers: [ImagemService, ImagemDataService]
    }).compile();

    service = module.get<ImagemService>(ImagemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
