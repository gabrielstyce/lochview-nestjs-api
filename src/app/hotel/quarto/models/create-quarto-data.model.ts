import { IdModel } from '../../../core/shared/models/common-service.types';

export interface CreateQuartoDataModel {
  quarto: {
    titulo: string;
    descricao: string;
    valor: number;
  };

  ownerId: string;
  imagens: Array<IdModel<string>>;
  atributos: Array<IdModel<number>>;
}
