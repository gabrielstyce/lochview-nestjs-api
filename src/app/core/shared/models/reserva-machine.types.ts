import { ReservaStatus, ReservaStatusTipo } from '.prisma/client';
import { StateTransition } from './state-machine/state-transition.model';
import { Transitions } from './state-machine/transitions.model';

export type ReservaEvent = (e: ReservaStatus) => void;

// Ao alterar o nome da função
// precisa alterar no enum eReservaEvent também
export interface IReservaEvents {
  onReservaCanceled(...args): void;
  onPaymentConfirmed(...args): void;
  onPaymentRefused(...args): void;
  onCheckIn(...args): void;
  onCheckOut(...args): void;
}

// O valor do enum deve ser
// o mesmo nome do event *(função do IReservaEvents)*
export enum eReservaEvent {
  OnReservaCanceled = 'onReservaCanceled',
  OnPaymentConfirmed = 'onPaymentConfirmed',
  OnPaymentRefused = 'onPaymentRefused',
  OnCheckIn = 'onCheckIn',
  OnCheckOut = 'onCheckOut'
}

const reservaTrasitions = [
  { key: new StateTransition(ReservaStatusTipo.Pendente, eReservaEvent.OnPaymentConfirmed), value: ReservaStatusTipo.Confirmada },
  { key: new StateTransition(ReservaStatusTipo.Pendente, eReservaEvent.OnPaymentRefused), value: ReservaStatusTipo.Cancelada },
  { key: new StateTransition(ReservaStatusTipo.Pendente, eReservaEvent.OnReservaCanceled), value: ReservaStatusTipo.Cancelada },
  { key: new StateTransition(ReservaStatusTipo.Confirmada, eReservaEvent.OnReservaCanceled), value: ReservaStatusTipo.Cancelada },
  { key: new StateTransition(ReservaStatusTipo.Confirmada, eReservaEvent.OnCheckIn), value: ReservaStatusTipo.CheckedIn },
  { key: new StateTransition(ReservaStatusTipo.CheckedIn, eReservaEvent.OnCheckOut), value: ReservaStatusTipo.CheckedOut }
];

export const ReservaStatusTransitions = new Transitions<StateTransition<ReservaStatusTipo, eReservaEvent>, ReservaStatusTipo>(
  reservaTrasitions
);
