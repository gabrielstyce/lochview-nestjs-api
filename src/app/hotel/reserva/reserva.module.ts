import { Module } from '@nestjs/common';
import { CoreModule } from 'src/app/core/core.module';
import { QuartoModule } from '../quarto/quarto.module';
import { ReservaDataService } from './data/reserva-data.service';
import { ReservaService } from './reserva.service';

@Module({
  imports: [CoreModule, QuartoModule],
  providers: [ReservaService, ReservaDataService],
  exports: [ReservaService]
})
export class ReservaModule {}
