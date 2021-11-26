import { ReservaStatusTipo } from '.prisma/client';
import { eReservaEvent, ReservaStatusTransitions } from '../reserva-machine.types';
import { StateMachine } from '../state-machine/state-macahine.model';

export class ReservaStatusMachine extends StateMachine<ReservaStatusTipo, eReservaEvent> {
  constructor(currentStatus: ReservaStatusTipo) {
    super(currentStatus, ReservaStatusTransitions);
  }
}
