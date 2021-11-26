import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/app/core/shared/service/common-service.service';
import { CreateReservaDTO } from './dtos/create-reserva.dto';
import { UpdateReservaDTO } from './dtos/update-reserva.dto';
import { ReservaDataService } from './data/reserva-data.service';
import { Reserva } from '.prisma/client';
import { CreateReservaData } from './models/create-reserva-data.model';
import { QuartoService } from '../quarto/quarto.service';

@Injectable()
export class ReservaService extends CommonService<
  string,
  Reserva,
  CreateReservaDTO,
  UpdateReservaDTO,
  CreateReservaData,
  UpdateReservaDTO
> {
  constructor(private readonly dataService: ReservaDataService, private readonly quartoService: QuartoService) {
    super(dataService);
  }

  async parseCreateModel(data: CreateReservaDTO, ...args: any[]): Promise<CreateReservaData> {
    const totalValue = await this.quartoService.calcularHospedagem(data);

    return {
      ...data,
      valor: totalValue
    } as CreateReservaData;
  }
}
