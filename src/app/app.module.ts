import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { HotelModule } from './hotel/hotel.module';

@Module({
  imports: [CoreModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
