import { Usuario } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO implements Partial<Usuario> {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  senha!: string;
}
