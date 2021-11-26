import { Global, Module } from '@nestjs/common';
import { ClassValidationPipe } from './pipes/class-validation.pipe';
import { PrismaService } from './prisma/prisma.service';

@Global()
@Module({
  providers: [PrismaService, ClassValidationPipe],
  exports: [PrismaService, ClassValidationPipe]
})
export class SharedModule {}
