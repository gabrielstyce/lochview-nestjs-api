import { Module } from '@nestjs/common';
import { AdminService } from './admin/admin.service';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioDataService } from './usuario/usuario-data/usuario-data.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [AdminService, UsuarioService, UsuarioDataService],
  exports: [AdminService, UsuarioService]
})
export class UsersModule {}
