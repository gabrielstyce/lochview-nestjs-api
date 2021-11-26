import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { LoginDTO } from 'src/app/core/users/usuario/dto/login.dto';
import { AuthenticationService } from '../../authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthenticationService) {
    super();
  }

  async validate(data: LoginDTO): Promise<any> {
    const user = await this.authService.validateUser(data);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
