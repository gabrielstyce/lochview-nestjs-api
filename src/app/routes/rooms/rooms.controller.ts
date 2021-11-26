import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { JWTUtil } from 'src/app/core/authentication/extractor/jwt.extractor';
import { JwtAuthGuard } from 'src/app/core/authentication/guards/jwt-auth.guard';
import { CreateQuartoDTO } from 'src/app/hotel/quarto/dtos/create-quarto.dto';
import { UpdateQuartoDTO } from 'src/app/hotel/quarto/dtos/update-quarto.dto';
import { QuartoService } from 'src/app/hotel/quarto/quarto.service';
import { CreateReservaDTO } from 'src/app/hotel/reserva/dtos/create-reserva.dto';

@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
  constructor(private readonly quartoService: QuartoService, private readonly jwtUtil: JWTUtil) {}

  @Get()
  @ApiQuery({ name: 'checkIn', type: Date, required: false })
  @ApiQuery({ name: 'checkOut', type: Date, required: false })
  async listAll(@Query('checkIn') checkIn?: Date, @Query('checkOut') checkOut?: Date) {
    if (checkIn && checkOut) {
      return await this.quartoService.listByDate(checkIn, checkOut);
    }

    return await this.quartoService.listAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.quartoService.findById(+id);
  }

  @Get(':id/consultar')
  @ApiQuery({ name: 'checkIn', type: Date, required: false })
  @ApiQuery({ name: 'checkOut', type: Date, required: false })
  async consultarValor(@Param('id') id: string, @Query('checkIn') checkIn?: Date, @Query('checkOut') checkOut?: Date) {
    return await this.quartoService.calcularHospedagem({
      checkIn: checkIn,
      checkOut: checkOut
    } as CreateReservaDTO);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createRoom: CreateQuartoDTO, @Headers('Authorization') auth: string) {
    const json = await this.jwtUtil.decode(auth);
    return await this.quartoService.create(createRoom, json.sub);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateQuartoDto: UpdateQuartoDTO) {
    return await this.quartoService.update(+id, updateQuartoDto);
  }

  @Patch(':id/active')
  @UseGuards(JwtAuthGuard)
  async activate(@Param('id') id: string) {
    return await this.quartoService.activate(+id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return await this.quartoService.deactivate(+id);
  }
}
