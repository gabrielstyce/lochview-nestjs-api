import { ReservaStatus } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReservaStatusDTO implements Partial<ReservaStatus> {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  reservaId!: string;

  @ApiProperty({ required: false })
  @IsString()
  observacao!: string | null;
}
