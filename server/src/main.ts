import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/', express.static(join(__dirname, '..', 'public')));

  const { PORT } = process.env;
  await app.listen(PORT || 8000);
}
bootstrap();
