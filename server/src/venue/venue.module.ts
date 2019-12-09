import { Module } from '@nestjs/common';
import { VenueController } from './venue.controller';
import { VenueService } from './venue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import VenueRepository from './venue.repository';

@Module({
  imports: [TypeOrmModule.forFeature([VenueRepository])],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
