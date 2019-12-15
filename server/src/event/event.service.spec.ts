import { Test } from '@nestjs/testing';
import { EventService } from './event.service';
import { EventRepository } from './event.repository';

const mockEventRepository = () => ({});

describe('EventService', () => {
  let eventService;
  let eventRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [EventService],
    }).compile();
    eventService = await module.get<EventService>(EventService);
    eventRepository = await module.get<EventRepository>(EventRepository);
  });
});
