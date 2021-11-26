import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtModuleConfig, JwtStrategyConfig } from '../shared/config/jwt.config';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';
import { AuthenticationService } from './authentication.service';
import { JWTUtil } from './extractor/jwt.extractor';
import { JwtStrategy } from './strategies/jwt/jwt.strategy';
import { LocalStrategy } from './strategies/local/local.strategy';

@Module({
  imports: [UsersModule, SharedModule, PassportModule, JwtModule.register(JwtModuleConfig)],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy, JWTUtil],
  exports: [AuthenticationService, LocalStrategy, JwtStrategy, JWTUtil]
})
export class AuthenticationModule {}
