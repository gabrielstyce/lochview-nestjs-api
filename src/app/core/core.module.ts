import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthenticationModule, SharedModule, UsersModule],
  exports: [AuthenticationModule, SharedModule, UsersModule]
})
export class CoreModule {}
