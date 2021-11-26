import { Quarto } from '.prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CommonService } from '../../core/shared/service/common-service.service';
import { ImagemService } from '../imagem/imagem.service';
import { CreateQuartoDTO } from './dtos/create-quarto.dto';
import { UpdateQuartoDTO } from './dtos/update-quarto.dto';
import { CreateQuartoDataModel } from './models/create-quarto-data.model';
import { QuartoDataService } from './data/quarto-data.service';
import { CreateReservaDTO } from '../reserva/dtos/create-reserva.dto';
import { DateHelper } from 'src/app/helpers/date.helper';

@Injectable()
export class QuartoService extends CommonService<number, Quarto, CreateQuartoDTO, UpdateQuartoDTO, CreateQuartoDataModel, UpdateQuartoDTO> {
  constructor(private readonly dataService: QuartoDataService, private readonly imageService: ImagemService) {
    super(dataService);
  }

  public async listByDate(initialDate: Date, finalDate: Date) {
    return await this.dataService.listByDate(new Date(initialDate), new Date(finalDate));
  }

  protected async parseCreateModel(data: CreateQuartoDTO, [ownerId]): Promise<CreateQuartoDataModel> {
    const images = await this.imageService.createMany(data.imagens);

    return {
      ownerId: ownerId,
      quarto: {
        descricao: data.descricao,
        titulo: data.titulo,
        valor: data.valor
      },
      atributos: data.atributos,
      imagens: images
    } as CreateQuartoDataModel;
  }

  async calcularHospedagem(data: CreateReservaDTO) {
    const quarto = await this.findById(data.quartoId);
    if (quarto) {
      const daysDiff = DateHelper.daysDifference(data.checkIn, data.checkOut);
      return daysDiff * parseFloat(quarto.valor as any);
    }

    throw new NotFoundException('Quarto não encontrado.');
  }
}
