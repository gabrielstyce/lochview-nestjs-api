import { Module } from '@nestjs/common';
import { CoreModule } from 'src/app/core/core.module';
import { ReservaStatusDataService } from './data/reserva-status-data.service';
import { ReservaStatusService } from './reserva-status.service';

@Module({
  imports: [CoreModule],
  providers: [ReservaStatusService, ReservaStatusDataService],
  exports: [ReservaStatusService]
})
export class ReservaStatusModule {}
