import { Module } from '@nestjs/common';
import { CoreModule } from 'src/app/core/core.module';
import { ImagemDataService } from './data/imagem-data.service';
import { ImagemService } from './imagem.service';

@Module({
  imports: [CoreModule],
  providers: [ImagemService, ImagemDataService],
  exports: [ImagemService]
})
export class ImagemModule {}
