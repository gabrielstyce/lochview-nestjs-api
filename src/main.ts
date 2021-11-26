import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { PrismaService } from './app/core/shared/prisma/prisma.service';

const PORT = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prisma config
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app); // Enables graceful shutdown

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Lochview API')
    .setDescription('A api that servers to manage an hotel')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // class-validator config
  app.useGlobalPipes(new ValidationPipe());

  // Application start
  await app.listen(PORT);
  console.log(`Application is RUNING on 'http://localhost:${PORT}'`);
}
bootstrap();
