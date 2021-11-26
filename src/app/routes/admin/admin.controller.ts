import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/app/core/authentication/guards/jwt-auth.guard';
import { AdminService } from 'src/app/core/users/admin/admin.service';
import { CreateUserDTO } from 'src/app/core/users/usuario/dto/create-user.dto';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createAdmin(@Body() data: CreateUserDTO) {
    return await this.adminService.create(data);
  }

  @Post('/funcionario')
  @UseGuards(JwtAuthGuard)
  async createFuncionario(@Body() data: CreateUserDTO) {
    return await this.adminService.create(data);
  }
}
