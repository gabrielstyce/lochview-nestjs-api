import { Test, TestingModule } from '@nestjs/testing';
import { CoreModule } from 'src/app/core/core.module';
import { ImagemService } from '../imagem.service';
import { ImagemDataService } from './imagem-data.service';

describe('ImagemDataService', () => {
  let service: ImagemDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CoreModule],
      providers: [ImagemService, ImagemDataService]
    }).compile();

    service = module.get<ImagemDataService>(ImagemDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
