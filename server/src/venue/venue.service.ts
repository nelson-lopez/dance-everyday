import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
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

  async getVenueById(id: number): Promise<Venue> {
    const venue = await this.venueRepository.findOne(id);

    if (!venue) {
      throw new NotAcceptableException(`Venue with id of:${id} not found`);
    }

    return venue;
  }

  createVenue(createVenueDto: CreateVenueDto, name: string): Promise<Venue> {
    return this.venueRepository.createNewVenue(createVenueDto, name);
  }

  async deleteVenue(id: number): Promise<void> {
    const result = await this.venueRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Cannot find venue with id: ${id}`);
    }
  }
}
