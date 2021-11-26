import { Reserva } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReservaDTO implements Partial<Reserva> {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quartoId!: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  checkIn!: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  checkOut!: Date;
}
