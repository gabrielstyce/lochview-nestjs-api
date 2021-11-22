import { Usuario } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonUserService } from '../models/common-user-service.types';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsuarioDataService } from './usuario-data/usuario-data.service';

@Injectable()
export class UsuarioService extends CommonUserService {
  constructor(protected readonly dataService: UsuarioDataService) {
    super(dataService);
  }

  async create(model: CreateUserDTO): Promise<{ id: string } | null> {
    const user = await this.dataService.create(model);
    return user ? { id: user.id } : null;
  }

  async update(id: string, model: UpdateUserDTO): Promise<{ id: string } | null> {
    const user = await this.dataService.update(id, model);
    return user ? { id: user.id } : null;
  }

  async listAll(): Promise<Usuario[] | null> {
    return await this.dataService.listAll();
  }

  async findById(id: string): Promise<Usuario | null> {
    return this.dataService.findById(id);
  }

  async findByCpf(cpf: string): Promise<Usuario | null> {
    return this.dataService.findByCpf(cpf);
  }

  async validate(): Promise<boolean> {
    throw new Error('not implemented');
  }
}
