import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('API de Votaciones')
    .setDescription('Documentación de la API de Votaciones')
    .setVersion('1.0')
    .addBearerAuth() // Si estás usando autenticación con JWT, añade Bearer Auth
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document); // URL para acceder a Swagger: http://localhost:3000/api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
