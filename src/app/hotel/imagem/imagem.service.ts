import { Imagem } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonService } from '../../core/shared/service/common-service.service';
import { CreateImageDTO } from './dtos/create-image.dto';
import { UpdateImageDTO } from './dtos/update-image.dto';
import { ImagemDataService } from './data/imagem-data.service';

@Injectable()
export class ImagemService extends CommonService<string, Imagem, CreateImageDTO, UpdateImageDTO, CreateImageDTO, UpdateImageDTO> {
  constructor(private readonly dataService: ImagemDataService) {
    super(dataService);
  }
}
