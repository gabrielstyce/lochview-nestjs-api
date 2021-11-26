import { ReservaStatus } from '@prisma/client';
import { ReservaStatusMachine } from 'src/app/core/shared/models/factories/reserva-status-machine.factory';
import { IReservaEvents, eReservaEvent } from 'src/app/core/shared/models/reserva-machine.types';
import { CommonService } from 'src/app/core/shared/service/common-service.service';
import { ReservaStatusDataService } from '../data/reserva-status-data.service';
import { CreateReservaStatusDTO } from '../dtos/create-reserva-status.dto';
import { UpdateReservaStatusDTO } from '../dtos/update-reserva-status.dto';
import { CreateReservaStatusData } from '../models/create-reserva-status-data';

export abstract class ReservaStatusMachineActions
  extends CommonService<
    string,
    ReservaStatus,
    CreateReservaStatusDTO,
    UpdateReservaStatusDTO,
    CreateReservaStatusData,
    UpdateReservaStatusDTO
  >
  implements IReservaEvents
{
  constructor(private ds: ReservaStatusDataService) {
    super(ds);
  }

  async parseCreateModel(data: CreateReservaStatusDTO, [status]): Promise<CreateReservaStatusData> {
    return {
      observacao: data.observacao,
      reservaId: data.reservaId,
      status: status
    } as CreateReservaStatusData;
  }

  async onEventFired(event: eReservaEvent, data: CreateReservaStatusDTO) {
    const lastStatus = await this.ds.getLastStatus(data.reservaId);
    if (lastStatus) {
      const statusMachine = new ReservaStatusMachine(lastStatus.status);
      const nextStatus = statusMachine.getNext(event);
      return await this.create(data, nextStatus);
    }
  }

  async onReservaCanceled(reservaId: string): Promise<void> {
    await this.onEventFired(eReservaEvent.OnReservaCanceled, {
      observacao: 'Sua reserva foi cancelada!',
      reservaId: reservaId
    });
  }

  async onPaymentConfirmed(reservaId: string): Promise<void> {
    await this.onEventFired(eReservaEvent.OnPaymentConfirmed, {
      observacao: 'Sua reserva foi confirmada, aguardamos seu check-in =)',
      reservaId: reservaId
    });
  }

  async onPaymentRefused(reservaId: string): Promise<void> {
    await this.onEventFired(eReservaEvent.OnPaymentRefused, {
      observacao: 'Sua reserva foi cancelada = (',
      reservaId: reservaId
    });
  }

  async onCheckIn(reservaId: string): Promise<void> {
    await this.onEventFired(eReservaEvent.OnCheckIn, {
      observacao: 'Você realizou o check-in!',
      reservaId: reservaId
    });
  }

  async onCheckOut(reservaId: string): Promise<void> {
    await this.onEventFired(eReservaEvent.OnCheckOut, {
      observacao: 'Você realizou o check-ou, volte sempre = )',
      reservaId: reservaId
    });
  }
}
