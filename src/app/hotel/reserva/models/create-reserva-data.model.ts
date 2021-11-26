import { CreateReservaStatusData } from '../../reserva-status/models/create-reserva-status-data';
import { CreateReservaDTO } from '../dtos/create-reserva.dto';

export interface CreateReservaData extends CreateReservaDTO {
  valor: number;
}
