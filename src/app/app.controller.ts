import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('healthcheck')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatus(): string {
    return this.appService.getStatus();
  }
}
