import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export abstract class CommonUpdateModelString {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id!: string;
}

export abstract class CommonUpdateModelNumber {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id!: number;
}
