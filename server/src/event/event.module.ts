import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventRepository } from './event.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import Venue from 'src/venue/venue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventRepository, Venue])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
