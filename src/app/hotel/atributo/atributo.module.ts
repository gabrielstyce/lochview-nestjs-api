import { Module } from '@nestjs/common';
import { AtributoService } from './atributo.service';
import { AtributoDataService } from './data/atributo-data.service';
import { CoreModule } from 'src/app/core/core.module';

@Module({
  imports: [CoreModule],
  providers: [AtributoService, AtributoDataService],
  exports: [AtributoService]
})
export class AtributoModule {}
