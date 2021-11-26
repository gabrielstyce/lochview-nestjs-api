import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../../shared/config/jwt.config';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
