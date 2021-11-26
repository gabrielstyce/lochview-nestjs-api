import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { CreateUserDTO } from 'src/app/core/users/usuario/dto/create-user.dto';
import { LoginDTO } from 'src/app/core/users/usuario/dto/login.dto';
import { UsuarioService } from 'src/app/core/users/usuario/usuario.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly authService: AuthenticationService, private readonly userService: UsuarioService) {}

  @Post()
  async create(@Body() payload: CreateUserDTO) {
    return await this.userService.create(payload);
  }

  // TODO: Adicionar atributos do usuário
  // @Get(':id/telefone')
  // async getTelefone(@Param() userId: string) {
  //   if (!userId) {
  //     const user = await this.userService.findById(userId);
  //     if (user) {
  //       return 'OK';
  //     }
  //   }

  //   throw new NotFoundException('User not found');
  // }

  // @Post(':id/telefone')
  // async createTelefone(@Param() userId: string) {
  //   if (!userId) {
  //     const user = await this.userService.findById(userId);
  //     if (user) {
  //       return 'OK';
  //     }
  //   }
  // }

  @Post('/login')
  async login(@Body() payload: LoginDTO) {
    return await this.authService.login(payload);
  }
}
