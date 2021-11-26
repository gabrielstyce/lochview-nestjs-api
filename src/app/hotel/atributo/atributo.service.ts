import { Atributo } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CommonService } from '../../core/shared/service/common-service.service';
import { AtributoDataService } from './data/atributo-data.service';
import { CreateAtributoDTO } from './dto/create-atributo.dto';
import { UpdateAtributoDTO } from './dto/update-atributo.dto';

@Injectable()
export class AtributoService extends CommonService<
  number,
  Atributo,
  CreateAtributoDTO,
  UpdateAtributoDTO,
  CreateAtributoDTO,
  UpdateAtributoDTO
> {
  constructor(private readonly dataService: AtributoDataService) {
    super(dataService);
  }
}
