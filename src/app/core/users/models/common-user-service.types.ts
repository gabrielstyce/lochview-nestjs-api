import * as bcrypt from 'bcrypt';
import { Usuario } from '.prisma/client';
import { CommonService } from '../../shared/service/common-service.service';
import { CreateUserDTO } from '../usuario/dto/create-user.dto';
import { LoginDTO } from '../usuario/dto/login.dto';
import { UpdateUserDTO } from '../usuario/dto/update-user.dto';
import { UsuarioDataService } from '../usuario/usuario-data/usuario-data.service';

export interface ICommonUserService {
  validate(user: Partial<Usuario>): Promise<Partial<Usuario> | null>;
}

export abstract class CommonUserService
  extends CommonService<string, Usuario, CreateUserDTO, UpdateUserDTO, CreateUserDTO, UpdateUserDTO>
  implements ICommonUserService
{
  constructor(private readonly _dS: UsuarioDataService) {
    super(_dS);
  }

  async validate({ email, senha }: LoginDTO): Promise<Partial<Usuario> | null> {
    const user = await this._dS.findByEmail(email);
    const pwdHash = await bcrypt.hash(senha, 10);
    if (user && bcrypt.compare(user.senha, pwdHash)) {
      const { senha, ...result } = user;
      return result;
    }

    return null;
  }

  async listAll(): Promise<Usuario[] | null> {
    return await this._dS.listAll();
  }

  async findById(id: string): Promise<Usuario | null> {
    return this._dS.findById(id);
  }

  async findByEmail(name: string) {
    return this._dS.findByEmail(name);
  }

  async findByCpf(cpf: string): Promise<Usuario | null> {
    return this._dS.findByCpf(cpf);
  }
}
