import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [UsersModule, SharedModule],
  providers: [AuthenticationService],
  exports: [AuthenticationService]
})
export class AuthenticationModule {}
