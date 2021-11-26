import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../model/jwt-payload.model';

@Injectable()
export class JWTUtil {
  constructor(private readonly jwtService: JwtService) {}

  decode(auth: string): JwtPayload {
    const jwt = auth.replace('Bearer ', '');
    return this.jwtService.decode(jwt, { json: true }) as JwtPayload;
  }
}
