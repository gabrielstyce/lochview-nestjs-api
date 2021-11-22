import { Test, TestingModule } from '@nestjs/testing';
import { SharedModule } from '../../shared/shared.module';
import { UsuarioDataService } from '../usuario/usuario-data/usuario-data.service';
import { UsuarioService } from '../usuario/usuario.service';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SharedModule],
      providers: [AdminService, UsuarioService, UsuarioDataService]
    }).compile();

    service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
