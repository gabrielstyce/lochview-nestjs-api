import { IdModel } from '../../../core/shared/models/common-service.types';

export interface CreateQuartoDataModel {
  quarto: {
    titulo: string;
    descricao: string;
  };

  ownerId: string;
  imagens: Array<IdModel<string>>;
  atributos: Array<IdModel<number>>;
}
