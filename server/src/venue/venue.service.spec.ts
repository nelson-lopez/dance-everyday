import { Test } from '@nestjs/testing';
import { VenueService } from './venue.service';
import VenueRepository from './venue.repository';

const mockVenueRepository = () => ({
  getVenueById: jest.fn(),
  getAllVenues: jest.fn(),
  findOne: jest.fn(),
});

describe('VenueService', () => {
  let venueService;
  let venueRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        VenueService,
        { provide: VenueRepository, useFactory: mockVenueRepository },
      ],
    }).compile();
    venueService = await module.get<VenueService>(VenueService);
    venueRepository = await module.get<VenueRepository>(VenueRepository);
  });

  describe('getAllVenues', () => {
    it('should return a list of all venues', async () => {
      venueRepository.getAllVenues.mockResolvedValue('Some value');

      expect(venueRepository.getAllVenues).not.toHaveBeenCalled();

      const venues = await venueService.getAllVenues();

      expect(venueRepository.getAllVenues).toHaveBeenCalled();
      expect(venues).toEqual('Some value');
    });
  });
  describe('getVenueById', () => {
    it('should return a specific venue by its ID', async () => {
      const mockVenue = {
        id: 1,
        name: 'test name',
        location: 'test location',
        phone: 'test phone',
        createdAt: Date,
        events: [],
      };
      venueRepository.findOne.mockResolvedValue(mockVenue);

      const result = await venueService.getVenueById(1);
      expect(result).toEqual(mockVenue);
      expect(venueRepository.findOne).toHaveBeenCalledWith(1);
    });

    it('should should throw a NotAcceptableException when the ID is false', () => {});
  });
});
