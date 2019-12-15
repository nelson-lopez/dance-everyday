import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventRepository } from './event.repository';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/createevent.dto';
import { FilterEventDto } from './dto/filter-event.dto';
import { UpdateEventDto } from './dto/updatevent.dto';

@Injectable()
/**
 * TODO: Consider passing more business logic to this service layer
 */
export class EventService {
  constructor(
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository,
  ) {}

  getEvents(filterEventDto: FilterEventDto): Promise<Event[]> {
    return this.eventRepository.getEvents(filterEventDto);
  }

  createEvent(
    createEventDto: CreateEventDto,
    name: string,
    date: string,
    venueName: string,
  ): Promise<Event> {
    return this.eventRepository.createEvent(
      createEventDto,
      name,
      date,
      venueName,
    );
  }

  getEventById(id: number): Promise<Event> {
    const event = this.eventRepository.findOne(id);

    if (!event) {
      throw new NotAcceptableException(`Event ${id} is invalid!`);
    }
    return event;
  }

  updateEvent(
    updateEventDto: UpdateEventDto,
    id: number,
    name: string,
    date: string,
  ): Promise<Event> {
    return this.eventRepository.updateEvent(updateEventDto, id, name, date);
  }

  deleteEvent(id: number): void {
    this.eventRepository.deleteEvent(id);
  }
}
