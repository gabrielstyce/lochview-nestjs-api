import { Usuario } from '.prisma/client';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from '../users/usuario/dto/login.dto';
import { UsuarioService } from '../users/usuario/usuario.service';

@Injectable()
export class AuthenticationService {
  constructor(private readonly usuarioService: UsuarioService, private readonly jwtService: JwtService) {}

  async validateUser(user: LoginDTO): Promise<Partial<Usuario> | null> {
    return await this.usuarioService.validate(user);
  }

  async login(user: LoginDTO) {
    const validUser = await this.validateUser(user);
    if (validUser) {
      const payload = { username: validUser.email, sub: validUser.id };
      return {
        access_token: this.jwtService.sign(payload)
      };
    }

    throw new UnauthorizedException();
  }
}
