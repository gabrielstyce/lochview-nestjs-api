import { Reserva, ReservaStatusTipo } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonDataService } from 'src/app/core/shared/data/common-data.service';
import { IdModel, PromiseDataResponse } from 'src/app/core/shared/models/common-service.types';
import { PrismaService } from 'src/app/core/shared/prisma/prisma.service';
import { CreateReservaDTO } from '../dtos/create-reserva.dto';
import { UpdateReservaDTO } from '../dtos/update-reserva.dto';

@Injectable()
export class ReservaDataService extends CommonDataService<string, Reserva, CreateReservaDTO, UpdateReservaDTO> {
  protected get dataService() {
    return this._p.reserva;
  }

  constructor(private readonly _p: PrismaService) {
    super(_p);
  }

  async create(dto: CreateReservaDTO, [hospedeId]): PromiseDataResponse<IdModel<string>> {
    return await this.dataService.create({
      data: {
        quarto: {
          connect: {
            id: dto.quartoId
          }
        },
        hospede: {
          connect: {
            id: hospedeId
          }
        },
        status: {
          create: {
            observacao: 'Solicitação da reserva recebida, aquardando confirmação!',
            status: ReservaStatusTipo.Pendente
          }
        },
        checkIn: dto.checkIn,
        checkOut: dto.checkOut
      }
    });
  }
}
