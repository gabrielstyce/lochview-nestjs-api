import { Atributo } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CommonUpdateModelString } from '../../../core/shared/models/common-update-model.dto';
import { CreateImageDTO } from '../../imagem/dtos/create-image.dto';

export class CreateAtributoDTO implements Partial<Atributo> {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  descricao!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  valor!: string;

  @ApiProperty({
    type: [CreateImageDTO]
  })
  @IsArray()
  @ArrayMaxSize(10)
  @ValidateNested()
  imagens!: Array<CommonUpdateModelString>;
}
