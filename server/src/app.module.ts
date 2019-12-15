import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { VenueModule } from './venue/venue.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from './config/ormconfig';

@Module({
  imports: [EventModule, VenueModule, TypeOrmModule.forRoot(ormconfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
