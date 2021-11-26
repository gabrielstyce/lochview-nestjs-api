import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsArray, IsNotEmpty, IsString, MaxLength, ValidateNested } from 'class-validator';
import { CommonUpdateModelNumber, CommonUpdateModelString } from '../../../core/shared/models/common-update-model.dto';

export class UpdateQuartoDTO implements CommonUpdateModelNumber {
  @ApiProperty()
  @IsNotEmpty()
  id!: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  titulo?: string;

  @ApiProperty()
  @IsString()
  @MaxLength(50)
  descricao?: string;

  @ApiProperty({
    type: [CommonUpdateModelString],
    description: 'The ids of the images to undo the relationship with the current model'
  })
  @ValidateNested()
  imagens?: Array<CommonUpdateModelString>;

  @ApiProperty({
    type: [CommonUpdateModelNumber],
    description: 'The ids of the atributos to undo the relationship with the current model'
  })
  @ValidateNested()
  atributos?: Array<CommonUpdateModelNumber>;
}
