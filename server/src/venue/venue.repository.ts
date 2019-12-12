import { EntityRepository, Repository } from 'typeorm';
import Venue from './venue.entity';
import CreateVenueDto from './dto/venue.dto';

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

    await newVenue.save();

    return newVenue;
  }
}
