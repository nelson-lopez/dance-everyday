import { EntityRepository, Repository } from 'typeorm';
import Venue from './venue.entity';
import CreateVenueDto from './dto/venue.dto';
import { NotAcceptableException } from '@nestjs/common';

@EntityRepository(Venue)
export default class VenueRepository extends Repository<Venue> {
  async getAllVenues(): Promise<Venue[]> {
    const query = this.createQueryBuilder('venue');

    const venues = await query.getMany();

    return venues;
  }

  async createNewVenue({
    name,
    location,
    contact,
  }: CreateVenueDto): Promise<Venue> {
    const newVenue = new Venue();
    newVenue.name = name;
    newVenue.location = location;
    newVenue.contact = contact;

    await newVenue.save();

    return newVenue;
  }

  async getVenueById(id: number): Promise<Venue> {
    const venue = await this.findOne(id);

    if (!venue) {
      throw new NotAcceptableException(`Venue with id of:${id} not found`);
    }

    return venue;
  }
}
