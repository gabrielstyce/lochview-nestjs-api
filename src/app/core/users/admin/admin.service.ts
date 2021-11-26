import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../usuario/dto/create-user.dto';
import { UsuarioDataService } from '../usuario/usuario-data/usuario-data.service';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AdminService extends UsuarioService {
  constructor(protected readonly data: UsuarioDataService) {
    super(data);
  }

  async create(model: CreateUserDTO): Promise<{ id: string } | null> {
    return super.create(model, 'Admin');
  }

  async createFuncionario(model: CreateUserDTO): Promise<{ id: string } | null> {
    return super.create(model, 'Funcionario');
  }
}
