import { Imagem } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonDataService } from '../../../core/shared/data/common-data.service';
import { PrismaService } from '../../../core/shared/prisma/prisma.service';
import { CreateImageDTO } from '../dtos/create-image.dto';
import { UpdateImageDTO } from '../dtos/update-image.dto';

@Injectable()
export class ImagemDataService extends CommonDataService<string, Imagem, CreateImageDTO, UpdateImageDTO> {
  public get dataService() {
    return this._p.imagem;
  }

  constructor(public readonly _p: PrismaService) {
    super(_p);
  }
}
