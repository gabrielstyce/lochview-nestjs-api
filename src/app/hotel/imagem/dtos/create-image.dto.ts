import { Imagem } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateImageDTO implements Partial<Imagem> {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  url!: string;

  @ApiProperty()
  @IsOptional()
  descricao?: string;
}
