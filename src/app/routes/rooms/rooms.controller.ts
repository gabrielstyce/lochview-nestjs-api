import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { JWTUtil } from 'src/app/core/authentication/extractor/jwt.extractor';
import { JwtAuthGuard } from 'src/app/core/authentication/guards/jwt-auth.guard';
import { CreateQuartoDTO } from 'src/app/hotel/quarto/dtos/create-quarto.dto';
import { UpdateQuartoDTO } from 'src/app/hotel/quarto/dtos/update-quarto.dto';
import { QuartoService } from 'src/app/hotel/quarto/quarto.service';

@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
  constructor(private readonly quartoService: QuartoService, private readonly jwtUtil: JWTUtil) {}

  @Get()
  @ApiQuery({ name: 'initialDate', type: Date, required: false })
  @ApiQuery({ name: 'finalDate', type: Date, required: false })
  listAll(@Query('initialDate') initialDate?: Date, @Query('finalDate') finalDate?: Date) {
    if (initialDate && finalDate) {
      try {
        const iDate = new Date(initialDate);
        const fDate = new Date(finalDate);
        return this.quartoService.listByDate(iDate, fDate);
      } catch (error) {
        throw new Error('Parametros inválidos');
      }
    }

    return this.quartoService.listAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quartoService.findById(+id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createRoom: CreateQuartoDTO, @Headers('Authorization') auth: string) {
    const json = await this.jwtUtil.decode(auth);
    return this.quartoService.create(createRoom, json.sub);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateQuartoDto: UpdateQuartoDTO) {
    return this.quartoService.update(+id, updateQuartoDto);
  }

  @Patch(':id/active')
  @UseGuards(JwtAuthGuard)
  activate(@Param('id') id: string) {
    return this.quartoService.activate(+id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.quartoService.deactivate(+id);
  }
}
