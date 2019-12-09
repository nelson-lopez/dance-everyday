import { Injectable } from '@nestjs/common';
import VenueRepository from './venue.repository';
import { InjectRepository } from '@nestjs/typeorm';
import Venue from './venue.entity';
import CreateVenueDto from './dto/venue.dto';

@Injectable()
export class VenueService {
  constructor(
    @InjectRepository(Venue)
    private venueRepository: VenueRepository,
  ) {}

  getAllVenus(): Promise<Venue[]> {
    return this.venueRepository.getAllVenues();
  }

  createVenue(createVenueDto: CreateVenueDto): Promise<Venue> {
    return this.venueRepository.createNewVenue(createVenueDto);
  }
}
