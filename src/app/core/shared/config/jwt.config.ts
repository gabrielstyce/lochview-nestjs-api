import { ExtractJwt } from 'passport-jwt';
import { SetMetadata } from '@nestjs/common';

export const JwtModuleConfig = {
  secret: '6a0e9aa2c67a82168462e564929874fd',
  signOptions: { expiresIn: '300s' }
};

export const JwtStrategyConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  ignoreExpiration: false,
  secretOrKey: '6a0e9aa2c67a82168462e564929874fd'
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
