import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventRepository } from './event.repository';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/event.dto';
import { FilterEventDto } from './dto/filter-event.dto';

@Injectable()
export class EventService {
  constructor(
    // Import TypeOrm Repository to be injected for service
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository,
  ) {}

  createEvent(createEventDto: CreateEventDto): Promise<Event> {
    return this.eventRepository.createEvent(createEventDto);
  }

  getEvents(filterEventDto: FilterEventDto): Promise<Event[]> {
    return this.eventRepository.getEvents(filterEventDto);
  }

  getEventById(id: number): Promise<Event> {
    const event = this.eventRepository.findOne(id);

    if (!event) {
      throw new NotAcceptableException(`Event ${id} is invalid!`);
    }
    return event;
  }

  updateEvent(createEventDto: CreateEventDto, id: number): Promise<Event> {
    return this.eventRepository.updateEvent(createEventDto, id);
  }

  deleteEvent(id: number): void {
    this.eventRepository.deleteEvent(id);
  }
}
