import { Reserva } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReservaDTO implements Partial<Reserva> {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quartoId!: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  checkIn!: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  checkOut!: Date;
}
