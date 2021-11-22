import { Test, TestingModule } from '@nestjs/testing';
import { SharedModule } from '../../shared/shared.module';
import { AdminService } from '../admin/admin.service';
import { UsuarioDataService } from './usuario-data/usuario-data.service';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SharedModule],
      providers: [AdminService, UsuarioService, UsuarioDataService]
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
