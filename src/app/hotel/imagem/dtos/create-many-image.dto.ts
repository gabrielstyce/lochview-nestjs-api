import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsArray, ValidateNested } from 'class-validator';
import { CreateImageDTO } from './create-image.dto';

export class CreateManyImageDTO {
  @ApiProperty({
    type: [CreateImageDTO]
  })
  @IsArray()
  @ArrayMaxSize(10)
  @ValidateNested()
  data!: Array<CreateImageDTO>;
}
