import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Check if Swagger should be enabled based on environment variable
  const isSwaggerEnabled = process.env.ENABLE_SWAGGER === 'true';

  if (isSwaggerEnabled) {
    const config = new DocumentBuilder()
      .setTitle('Success Management System API')
      .setDescription(
        'Originally developed as SysAGA, the Aero Zone Guard was designed to accelerate the study and permission process for construction projects',
      )
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  await app.listen(3000);
}
bootstrap();
