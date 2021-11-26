import { Role, Usuario } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonDataService } from '../../../shared/data/common-data.service';
import { IdModel, PromiseDataResponse } from '../../../shared/models/common-service.types';
import { PrismaService } from '../../../shared/prisma/prisma.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UpdateUserDTO } from '../dto/update-user.dto';

@Injectable()
export class UsuarioDataService extends CommonDataService<string, Usuario, CreateUserDTO, UpdateUserDTO> {
  public get dataService() {
    return this._p.usuario;
  }

  constructor(private readonly _p: PrismaService) {
    super(_p);
  }

  async create(user: CreateUserDTO, tipo: Role): PromiseDataResponse<IdModel<string>> {
    console.log(user);
    const newData = {
      ...user,
      tipo: tipo
    };

    return super.create(newData);
  }

  async findByCpf(cpf: string): Promise<Usuario | null> {
    return await this.dataService.findFirst({
      where: { cpf: cpf }
    });
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return await this.dataService.findFirst({
      where: { email: email }
    });
  }
}
