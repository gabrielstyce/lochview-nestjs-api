import { Usuario } from '.prisma/client';
import { CommonService } from '../../shared/service/common-service.service';
import { CreateUserDTO } from '../usuario/dto/create-user.dto';
import { UpdateUserDTO } from '../usuario/dto/update-user.dto';

export interface ICommonUserService {
  validate(user: Partial<Usuario>): Promise<boolean>;
}

export abstract class CommonUserService
  extends CommonService<string, Usuario, CreateUserDTO, UpdateUserDTO, CreateUserDTO, UpdateUserDTO>
  implements ICommonUserService
{
  abstract validate(user: Partial<Usuario>): Promise<boolean>;
}
