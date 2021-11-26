import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CommonUpdateModelNumber } from '../../../core/shared/models/common-update-model.dto';
import { CreateAtributoDTO } from './create-atributo.dto';

export class UpdateAtributoDTO extends PartialType(CreateAtributoDTO) implements CommonUpdateModelNumber {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id!: number;
}
