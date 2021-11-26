import { PartialType } from '@nestjs/swagger';
import { CreateReservaDTO } from './create-reserva.dto';

export class UpdateReservaDTO extends PartialType(CreateReservaDTO) {}
