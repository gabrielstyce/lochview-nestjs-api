import { ExtractJwt } from 'passport-jwt';

const SECRET_KEY = process.env.AUTH_SECRET_KEY;

export const JwtModuleConfig = {
  secret: SECRET_KEY,
  signOptions: { expiresIn: '60s' }
};

export const JwtStrategyConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  ignoreExpiration: false,
  secretOrKey: SECRET_KEY
};
