import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/app/core/shared/service/common-service.service';
import { CreateReservaDTO } from './dtos/create-reserva.dto';
import { UpdateReservaDTO } from './dtos/update-reserva.dto';
import { ReservaDataService } from './data/reserva-data.service';
import { Reserva } from '.prisma/client';

@Injectable()
export class ReservaService extends CommonService<string, Reserva, CreateReservaDTO, UpdateReservaDTO, CreateReservaDTO, UpdateReservaDTO> {
  constructor(private readonly dataService: ReservaDataService) {
    super(dataService);
  }
}
