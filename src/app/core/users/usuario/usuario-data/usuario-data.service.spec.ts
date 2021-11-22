import { Test, TestingModule } from '@nestjs/testing';
import { SharedModule } from '../../../shared/shared.module';
import { UsuarioDataService } from './usuario-data.service';

describe('UsuarioDataService', () => {
  let service: UsuarioDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SharedModule],
      providers: [UsuarioDataService]
    }).compile();

    service = module.get<UsuarioDataService>(UsuarioDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
