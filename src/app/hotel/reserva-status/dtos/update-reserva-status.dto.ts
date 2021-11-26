import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CommonUpdateModelString } from 'src/app/core/shared/models/common-update-model.dto';

export class UpdateReservaStatusDTO extends CommonUpdateModelString {
  @ApiProperty()
  @IsString()
  observacao!: string;
}
