import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { Logger } from '@nestjs/common';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || serverConfig.port;

  const logger = new Logger('bootstrap');

  /**
   * TODO: Properly configure CORS once app is redeployed with new changes to only accept request from front end
   */

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({
      origin: serverConfig.origin,
    });
    logger.log(`Accepting request from origin ${serverConfig.origin}`);
  }

  /**
   *  * App Middleware we're using for logging, security,documentation, and compression
   *
   */
  const options = new DocumentBuilder()
    .setTitle('Dance Event Database')
    .setDescription('Feel free to browse the API')
    .addTag('venues', 'events')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  app.use(compression());
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  );

  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
