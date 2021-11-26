import { CreateReservaStatusData } from '../../reserva-status/models/create-reserva-status-data';
import { CreateReservaDTO } from '../dtos/create-reserva.dto';

export interface CreateReservaData {
  reserva: CreateReservaDTO;
  status: CreateReservaStatusData;
}
