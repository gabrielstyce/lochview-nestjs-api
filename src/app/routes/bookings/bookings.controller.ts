import { Body, Controller, Get, Headers, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JWTUtil } from 'src/app/core/authentication/extractor/jwt.extractor';
import { JwtAuthGuard } from 'src/app/core/authentication/guards/jwt-auth.guard';
import { IReservaEvents } from 'src/app/core/shared/models/reserva-machine.types';
import { ReservaStatusService } from 'src/app/hotel/reserva-status/reserva-status.service';
import { CreateReservaDTO } from 'src/app/hotel/reserva/dtos/create-reserva.dto';
import { ReservaService } from '../../hotel/reserva/reserva.service';

@ApiTags('bookings')
@Controller('bookings')
export class BookingsController implements IReservaEvents {
  constructor(
    private readonly reservaService: ReservaService,
    private readonly statusService: ReservaStatusService,
    private readonly jwtUtil: JWTUtil
  ) {}

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.reservaService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createReservaStatus: CreateReservaDTO, @Headers('Authorization') auth: string) {
    const json = await this.jwtUtil.decode(auth);
    return await this.reservaService.create(createReservaStatus, json.sub);
  }

  @Patch(':id/cancel')
  @UseGuards(JwtAuthGuard)
  async onReservaCanceled(@Param('id') reservaId: string): Promise<void> {
    return await this.statusService.onReservaCanceled(reservaId);
  }

  @Patch(':id/confirm')
  @UseGuards(JwtAuthGuard)
  async onPaymentConfirmed(@Param('id') reservaId: string): Promise<void> {
    return await this.statusService.onPaymentConfirmed(reservaId);
  }

  @Patch(':id/refuse')
  @UseGuards(JwtAuthGuard)
  async onPaymentRefused(@Param('id') reservaId: string): Promise<void> {
    return await this.statusService.onPaymentRefused(reservaId);
  }

  @Patch(':id/check-in')
  @UseGuards(JwtAuthGuard)
  async onCheckIn(@Param('id') reservaId: string): Promise<void> {
    return await this.statusService.onCheckIn(reservaId);
  }

  @Patch(':id/check-out')
  @UseGuards(JwtAuthGuard)
  async onCheckOut(@Param('id') reservaId: string): Promise<void> {
    return await this.statusService.onCheckOut(reservaId);
  }
}
