import { Quarto } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonService } from '../../core/shared/service/common-service.service';
import { ImagemService } from '../imagem/imagem.service';
import { CreateQuartoDTO } from './dtos/create-quarto.dto';
import { UpdateQuartoDTO } from './dtos/update-quarto.dto';
import { CreateQuartoDataModel } from './models/create-quarto-data.model';
import { QuartoDataService } from './data/quarto-data.service';

@Injectable()
export class QuartoService extends CommonService<number, Quarto, CreateQuartoDTO, UpdateQuartoDTO, CreateQuartoDataModel, UpdateQuartoDTO> {
  constructor(private readonly dataService: QuartoDataService, private readonly imageService: ImagemService) {
    super(dataService);
  }

  public async listByDate(initialDate: Date, finalDate: Date) {
    return await this.dataService.listByDate(initialDate, finalDate);
  }

  protected async parseCreateModel(data: CreateQuartoDTO, ownerId: string): Promise<CreateQuartoDataModel> {
    super.parseCreateModel(data, ownerId);
    const images = await this.imageService.createMany(data.imagens);

    return {
      ownerId: ownerId,
      quarto: {
        descricao: data.descricao,
        titulo: data.titulo
      },
      atributos: data.atributos,
      imagens: images
    } as CreateQuartoDataModel;
  }
}
