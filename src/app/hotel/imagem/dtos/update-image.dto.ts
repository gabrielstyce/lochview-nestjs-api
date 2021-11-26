import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateImageDTO } from './create-image.dto';
import { CommonUpdateModelString } from '../../../core/shared/models/common-update-model.dto';

export class UpdateImageDTO extends PartialType(CreateImageDTO) implements CommonUpdateModelString {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id!: string;
}
