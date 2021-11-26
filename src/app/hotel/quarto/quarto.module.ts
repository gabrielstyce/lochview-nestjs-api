import { Module } from '@nestjs/common';
import { QuartoService } from './quarto.service';
import { QuartoDataService } from './data/quarto-data.service';
import { ImagemModule } from '../imagem/imagem.module';
import { CoreModule } from 'src/app/core/core.module';

@Module({
  imports: [CoreModule, ImagemModule],
  providers: [QuartoService, QuartoDataService],
  exports: [QuartoService]
})
export class QuartoModule {}
