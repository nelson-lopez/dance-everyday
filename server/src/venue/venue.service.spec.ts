import { Test } from '@nestjs/testing';
import { VenueService } from './venue.service';
import VenueRepository from './venue.repository';

const mockVenueRepository = () => ({});

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
});
