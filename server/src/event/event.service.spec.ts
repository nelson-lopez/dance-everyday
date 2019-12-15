import { Test } from '@nestjs/testing';
import { EventService } from './event.service';
import { EventRepository } from './event.repository';
import { FilterEventDto } from './dto/filter-event.dto';

const mockEventRepository = () => ({
  getEvents: jest.fn(),
  getEventById: jest.fn(),
});

describe('EventService', () => {
  let eventService;
  let eventRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        EventService,
        { provide: EventRepository, useFactory: mockEventRepository },
      ],
    }).compile();
    eventService = await module.get<EventService>(EventService);
    eventRepository = await module.get<EventRepository>(EventRepository);
  });

  describe('getEvents', () => {
    it('gets all events from eventRepository ', async () => {
      eventRepository.getEvents.mockResolvedValue('Some Value');

      expect(eventRepository.getEvents).not.toHaveBeenCalled();
      const filter: FilterEventDto = { search: 'Some string' };
      const result = await eventService.getEvents(filter);
      // call eventService.getEvents
      expect(eventRepository.getEvents).toHaveBeenCalled();
      expect(result).toEqual('Some Value');
    });
  });

  //TODO: Finish test for entire service
  // TODO: Define a findOne method

  describe('getEventsById', () => {
    it('gets a specific event from eventRepository', async () => {});

    it('Throws an error if id is unspecified', async () => {});
  });
});
