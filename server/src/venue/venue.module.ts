import { Module } from '@nestjs/common';
import { VenueController } from './venue.controller';
import { VenueService } from './venue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import VenueRepository from './venue.repository';

@Module({
  imports: [
    /**
     * * Our database  will not be aware of our repository
     * * if we do not import it here via TypeOrmModule
     */
    TypeOrmModule.forFeature([VenueRepository]),
  ],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
