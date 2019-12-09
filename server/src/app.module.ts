import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { VenueModule } from './venue/venue.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [EventModule, VenueModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
