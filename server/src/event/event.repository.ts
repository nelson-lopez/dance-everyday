import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/createevent.dto';
import { NotAcceptableException, NotFoundException } from '@nestjs/common';
import { FilterEventDto } from './dto/filter-event.dto';
import { UpdateEventDto } from './dto/updatevent.dto';
import Venue from 'src/venue/venue.entity';
import VenueRepository from '../venue/venue.repository';

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
  /**
   *
   *
   * @param name  filtered through EventUpperCasePipe
   * @param date  ran separately through ConvertDatePipe
   * @param venueName this argument is needed for calling getVenueByName so we can secure the new events relation
   *  to it's belonging venue.
   *
   * TODO: Consider making less specific pipes and combining filters
   * * As it stands CreateEventDto is only used for our generic Validator Pipe,
   * * possible refactor in the future.
   */
  async createEvent(
    { description }: CreateEventDto,
    name: string,
    date: string,
    venueName: string,
  ): Promise<Event> {
    const venueRepository = getCustomRepository(VenueRepository);

    const venue: Venue = await venueRepository.getVenueByName(venueName);

    if (!venue) {
      throw new NotAcceptableException(
        `Venue with name ${venueName} does not exist`,
      );
    }

    const event = new Event();

    event.name = name;
    event.description = description;
    event.date = date;

    await event.save();
    await venue.events.push(event);
    await venue.save();

    return event;
  }

  async getEvents(filterEventDto: FilterEventDto): Promise<Event[]> {
    const query = this.createQueryBuilder('event').orderBy('id', 'ASC');
    const search = filterEventDto.search;
    if (search) {
      query.where('(event.name LIKE :search)', {
        search: `%${search}%`,
      });
    }

    const events = await query.getMany();
    return events;
  }

  async updateEvent(
    { description }: UpdateEventDto,
    id: number,
    name: string,
    date: string,
  ): Promise<Event> {
    const event = await this.findOne(id);

    if (!event) {
      throw new NotAcceptableException(`Event with ${id} is invalid`);
    }

    event.name = name;
    event.date = date;
    event.description = description;

    event.save();
    return event;
  }
}
