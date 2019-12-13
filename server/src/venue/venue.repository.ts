import { EntityRepository, Repository } from 'typeorm';
import Venue from './venue.entity';
import CreateVenueDto from './dto/venue.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Venue)
export default class VenueRepository extends Repository<Venue> {
  async getAllVenues(): Promise<Venue[]> {
    const query = this.createQueryBuilder('venue');

    const venues = await query.getMany();

    return venues;
  }

  async getVenueByName(venueName: string): Promise<Venue> {
    const venue = await this.findOne({
      name: venueName,
    });

    return venue;
  }

  async createNewVenue(
    { location, phone, email }: CreateVenueDto,
    name: string,
  ): Promise<Venue> {
    const newVenue = new Venue();
    newVenue.name = name;
    newVenue.location = location;
    newVenue.phone = phone;
    newVenue.email = email;

    try {
      await newVenue.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(`Venue name ${name} already exist`);
      } else {
        throw new InternalServerErrorException();
      }
    }
    return newVenue;
  }
}
