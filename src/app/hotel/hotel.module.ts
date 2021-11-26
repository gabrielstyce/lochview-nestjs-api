import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { QuartoModule } from './quarto/quarto.module';
import { ReservaModule } from './reserva/reserva.module';
import { ImagemModule } from './imagem/imagem.module';
import { AtributoModule } from './atributo/atributo.module';
import { ReservaStatusModule } from './reserva-status/reserva-status.module';

@Module({
  imports: [CoreModule, QuartoModule, ReservaModule, ImagemModule, AtributoModule, ReservaStatusModule],
  exports: [QuartoModule, ReservaModule, ReservaStatusModule],
  providers: []
})
export class HotelModule {}
