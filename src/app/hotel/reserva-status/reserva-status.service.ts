import { Injectable } from '@nestjs/common';
import { ReservaStatusDataService } from './data/reserva-status-data.service';
import { ReservaStatusMachineActions } from './status-machine/reserva-status-machine.actions';

@Injectable()
export class ReservaStatusService extends ReservaStatusMachineActions {
  constructor(private dataService: ReservaStatusDataService) {
    super(dataService);
  }

  async getHistory(reservaId: string) {
    return await this.dataService.getHistory(reservaId);
  }

  async getLastStatus(reservaId: string) {
    return await this.dataService.getLastStatus(reservaId);
  }
}
