import { EntityRepository, Repository } from 'typeorm';
import Venue from './venue.entity';
import CreateVenueDto from './dto/venue.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Venue)
/**
 * * This layer is for interacting with our Database
 * * By extending Repository we are granting our Venue entity TypeORM's methods
 *
 * ! This layer should only be concerned with the database
 */
export default class VenueRepository extends Repository<Venue> {
  async getAllVenues(): Promise<Venue[]> {
    const query = this.createQueryBuilder('venue').orderBy('id', 'ASC');

    const venues = await query.getMany();

    return venues;
  }

  /**
   * * We need this venue by name method to properly match events to venues during event creation
   *
   * ! this method is not designed to be used inside of the Venue module
   * TODO Make a more accurate algorithm for fetching the right venue
   */
  async getVenueByName(venueName: string): Promise<Venue> {
    const venue = await this.findOne({
      name: venueName,
    });

    return venue;
  }

  /**
   *
   * @param name
   * * We chose to pass in name separately because we run a custom pipe through this value in the controller layer
   */

  async createNewVenue(
    { location, phone }: CreateVenueDto,
    name: string,
  ): Promise<Venue> {
    const newVenue = new Venue();
    newVenue.name = name;
    newVenue.location = location;
    newVenue.phone = phone;

    /**
     * TODO: Possibly move this logic over to service layer.
     */
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
