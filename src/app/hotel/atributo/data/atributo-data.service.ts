import { Atributo } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonDataService } from '../../../core/shared/data/common-data.service';
import { PrismaService } from '../../../core/shared/prisma/prisma.service';
import { CreateAtributoDTO } from '../dto/create-atributo.dto';
import { UpdateAtributoDTO } from '../dto/update-atributo.dto';

@Injectable()
export class AtributoDataService extends CommonDataService<number, Atributo, CreateAtributoDTO, UpdateAtributoDTO> {
  get dataService(): any {
    return this._p.atributo;
  }

  constructor(private readonly _p: PrismaService) {
    super(_p);
  }
}
