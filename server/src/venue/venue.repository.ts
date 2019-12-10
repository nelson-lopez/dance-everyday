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
}
