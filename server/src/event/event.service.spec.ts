import { Test } from '@nestjs/testing';
import { EventService } from './event.service';
import { EventRepository } from './event.repository';
import { FilterEventDto } from './dto/filter-event.dto';
import { NotAcceptableException } from '@nestjs/common';
import { Event } from './event.entity';

const mockEventRepository = () => ({
  getEvents: jest.fn(),
  getEventById: jest.fn(),
  updateEvent: jest.fn(),
  createEvent: jest.fn(),
  findOne: jest.fn(),
  delete: jest.fn(),
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

  describe('getEventsById', () => {
    it('gets a specific event from eventRepository', async () => {
      const mockEvent = {
        id: 2,
        name: 'test name',
        description: 'test description',
        date: '12/12/12',
        createdAt: 'some date',
      };
      eventRepository.findOne.mockResolvedValue(mockEvent);

      const result = await eventService.getEventById(1);
      expect(result).toEqual(mockEvent);

      expect(eventRepository.findOne).toHaveBeenCalledWith(1);
    });

    it('Throws an error if id is unspecified', () => {
      eventRepository.findOne.mockResolvedValue(null);

      expect(eventService.getEventById(1)).rejects.toThrow();
    });
  });

  describe('createEvent', () => {
    it('Should return a new event with the specified properties', async () => {
      expect(eventRepository.createEvent).not.toHaveBeenCalled();
      const mockEventDto = {
        id: 1,
        name: 'test name',
        date: '12/12/12',
        description: 'test description',
        createdAt: 'some date',
      };

      const name = mockEventDto.name;
      const date = mockEventDto.date;
      const venueName = 'Test Venue';

      eventRepository.createEvent.mockResolvedValue(mockEventDto);

      const newEvent = await eventService.createEvent(
        mockEventDto,
        name,
        date,
        venueName,
      );
      expect(eventRepository.createEvent).toHaveBeenCalledWith(
        mockEventDto,
        name,
        date,
        venueName,
      );
      expect(newEvent).toEqual(mockEventDto);
    });
  });

  describe('deleteEvent', () => {
    it('should delete a event by a given ID and return void', async () => {
      eventRepository.delete.mockResolvedValue({ affected: 1 });
      expect(eventRepository.delete).not.toHaveBeenCalled();
      await eventService.deleteEvent(1);
      expect(eventRepository.delete).toHaveBeenCalled();
    });

    it('should throw a not found exception if ID is invalid', () => {
      eventRepository.delete.mockResolvedValue({ affected: 0 });
      expect(eventService.deleteEvent(1)).rejects.toThrow();
    });
  });

  describe('updateEvent', () => {
    it('should return a new updated event', async () => {
      expect(eventRepository.updateEvent).not.toHaveBeenCalled();
      const mockUpdateEventDto = {
        name: 'test name',
        date: '12/12/12',
        description: 'test description',
        venueName: 'test venue',
      };

      const id = 1;
      const name = 'something';
      const date = 'date string';

      const event = await eventService.updateEvent(
        mockUpdateEventDto,
        id,
        name,
        date,
      );
      const updatedEvent = await eventRepository.updateEvent(
        mockUpdateEventDto,
        id,
        name,
        date,
      );

      expect(event).toEqual(updatedEvent);
    });

    it('should throw an exception when an event is not found', () => {
      eventRepository.findOne.mockResolvedValue(null);
      expect(eventService.getEventById(1)).rejects.toThrow(
        NotAcceptableException,
      );
    });
  });
});
