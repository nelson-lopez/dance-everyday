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
/**
 * * The Injectable decorator is needed in order to apply the VenueService class
 * * to the Controller layer via Dependency Injection
 * * as well as scoping the VenueService as a provider inside of venue.module.ts
 */

/**
 * TODO: Possibly move more business logic to our service layer
 */
export class VenueService {
  constructor(
    /**
     * * We have to inject our TypeORM connection from PostgreSQL into our
     * * service layer via InjectRepository
     */
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

    /**
     * * If we receive a value other than 0 we can be assured that
     * * we have successfully deleted our venue from the database
     */

    if (result.affected === 0) {
      throw new NotFoundException(`Cannot find venue with id: ${id}`);
    }
  }
}
