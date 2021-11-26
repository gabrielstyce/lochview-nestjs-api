import { Role } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonUserService } from '../models/common-user-service.types';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsuarioDataService } from './usuario-data/usuario-data.service';
import { hash } from 'bcrypt';
@Injectable()
export class UsuarioService extends CommonUserService {
  constructor(protected readonly dataService: UsuarioDataService) {
    super(dataService);
  }

  async create(model: CreateUserDTO, tipo: Role = 'Default'): Promise<{ id: string } | null> {
    model.senha = await hash(model.senha, 10);
    const user = await this.dataService.create(model);
    return user ? { id: user.id } : null;
  }

  async update(id: string, model: UpdateUserDTO): Promise<{ id: string } | null> {
    const user = await this.dataService.update(id, model);
    return user ? { id: user.id } : null;
  }
}
