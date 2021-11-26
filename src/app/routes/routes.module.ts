import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { HotelModule } from '../hotel/hotel.module';
import { BookingsController } from './bookings/bookings.controller';
import { RoomsController } from './rooms/rooms.controller';
import { UsersController } from './users/users.controller';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [CoreModule, HotelModule],
  controllers: [BookingsController, RoomsController, UsersController, AdminController],
  exports: []
})
export class RoutesModule {}
