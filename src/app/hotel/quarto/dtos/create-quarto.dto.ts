import { Quarto } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsArray, IsNotEmpty, IsString, MaxLength, ValidateNested } from 'class-validator';
import { CommonUpdateModelNumber } from '../../../core/shared/models/common-update-model.dto';
import { CreateImageDTO } from '../../imagem/dtos/create-image.dto';

export class CreateQuartoDTO implements Partial<Quarto> {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  titulo!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  descricao!: string;

  @ApiProperty({
    type: [CreateImageDTO]
  })
  @IsArray()
  @ArrayMaxSize(10)
  @ValidateNested()
  imagens!: Array<CreateImageDTO>;

  @ApiProperty({
    type: [CommonUpdateModelNumber],
    description: 'The ids of the atributos to make the relationship with the current model'
  })
  @IsArray()
  @ArrayMaxSize(10)
  @ValidateNested()
  atributos!: Array<CommonUpdateModelNumber>;
}
