import { Injectable } from '@nestjs/common';
import { Quarto } from '.prisma/client';
import { PrismaService } from '../../../core/shared/prisma/prisma.service';
import { UpdateQuartoDTO } from '../dtos/update-quarto.dto';
import { CommonDataService } from '../../../core/shared/data/common-data.service';
import { IdModel, PromiseDataResponse } from '../../../core/shared/models/common-service.types';
import { CreateQuartoDataModel } from '../models/create-quarto-data.model';
import { COLUMNS_LIST } from '../models/quarto-column-list.model';

@Injectable()
export class QuartoDataService extends CommonDataService<number, Quarto, CreateQuartoDataModel, UpdateQuartoDTO> {
  protected get dataService() {
    return this._p.quarto;
  }

  constructor(private readonly _p: PrismaService) {
    super(_p);
  }

  async listByDate(initialDate: Date, finalDate: Date) {
    return (await this.dataService.findMany({
      distinct: ['id'],
      where: {
        reservas: {
          every: {
            checkIn: {
              gte: initialDate
            },
            checkOut: {
              lte: finalDate
            }
          }
        },
        ativo: true
      },
      select: COLUMNS_LIST
    })) as any;
  }

  async listAll(): PromiseDataResponse<Quarto[]> {
    return (await this.dataService.findMany({ select: COLUMNS_LIST })) as any;
  }

  async create(data: CreateQuartoDataModel): PromiseDataResponse<IdModel<number>> {
    return await this.dataService.create({
      data: {
        ...data.quarto,
        owner: {
          connect: {
            id: data.ownerId
          }
        },
        imagens: {
          connect: data.imagens
        },
        atributos: {
          connect: data.atributos
        }
      }
    });
  }

  async update(modelId: number, data: UpdateQuartoDTO): PromiseDataResponse<IdModel<number>> {
    return this.dataService.update({
      where: { id: modelId },
      data: {
        descricao: data.descricao,
        titulo: data.titulo,
        imagens: {
          disconnect: data.imagens
        },
        atributos: {
          disconnect: data.atributos
        }
      }
    });
  }
}
