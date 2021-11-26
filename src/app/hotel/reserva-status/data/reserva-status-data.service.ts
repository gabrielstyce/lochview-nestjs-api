import { ReservaStatus } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonDataService } from 'src/app/core/shared/data/common-data.service';
import { PrismaService } from 'src/app/core/shared/prisma/prisma.service';
import { CreateReservaData } from '../../reserva/models/create-reserva-data.model';
import { UpdateReservaStatusDTO } from '../dtos/update-reserva-status.dto';
import { CreateReservaStatusData } from '../models/create-reserva-status-data';

@Injectable()
export class ReservaStatusDataService extends CommonDataService<string, ReservaStatus, CreateReservaStatusData, UpdateReservaStatusDTO> {
  protected get dataService() {
    return this._p.reservaStatus;
  }

  constructor(private readonly _p: PrismaService) {
    super(_p);
  }

  async getHistory(reservaId: string): Promise<Array<ReservaStatus>> {
    return await this.dataService.findMany({
      where: {
        reservaId: reservaId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async getLastStatus(reservaId: string): Promise<ReservaStatus | null> {
    return await this.dataService.findFirst({
      where: {
        reservaId: reservaId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }
}
