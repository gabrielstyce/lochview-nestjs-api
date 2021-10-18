import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);

  console.log(`Application is RUNING on 'http://localhost:${process.env.PORT}'`);
}
bootstrap();
