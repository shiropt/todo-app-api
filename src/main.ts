import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.ORIGIN, process.env.SUB_ORIGIN], // 許可するオリジン
  });
  await app.listen(3001);
}
bootstrap();
