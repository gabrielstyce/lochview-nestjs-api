import { ReservaStatusTipo } from '.prisma/client';
import { StateMachine } from '../state-machine/state-macahine.model';
import { StateTransition } from '../state-machine/state-transition.model';
import { Transitions } from '../state-machine/transitions.model';

export enum ReservaEvent {
  OnReservaCreated,
  OnReservaCanceled,
  OnPaymentConfirmed,
  OnPaymentRefused,
  OnCheckIn,
  OnCheckOut
}

export class ReservaStatusMachine extends StateMachine<ReservaStatusTipo, ReservaEvent> {
  constructor() {
    const transitions = new Transitions<StateTransition<ReservaStatusTipo, ReservaEvent>, ReservaStatusTipo>([
      { key: new StateTransition(ReservaStatusTipo.Pendente, ReservaEvent.OnPaymentConfirmed), value: ReservaStatusTipo.Confirmada },
      { key: new StateTransition(ReservaStatusTipo.Pendente, ReservaEvent.OnPaymentRefused), value: ReservaStatusTipo.Cancelada },
      { key: new StateTransition(ReservaStatusTipo.Pendente, ReservaEvent.OnReservaCreated), value: ReservaStatusTipo.Cancelada },
      { key: new StateTransition(ReservaStatusTipo.Confirmada, ReservaEvent.OnReservaCanceled), value: ReservaStatusTipo.Cancelada },
      { key: new StateTransition(ReservaStatusTipo.Confirmada, ReservaEvent.OnCheckIn), value: ReservaStatusTipo.CheckedIn },
      { key: new StateTransition(ReservaStatusTipo.CheckedIn, ReservaEvent.OnCheckOut), value: ReservaStatusTipo.CheckedOut }
    ]);

    super(ReservaStatusTipo.Pendente, transitions);
  }
}
