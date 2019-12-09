import { Controller, Get, Post, Body } from '@nestjs/common';
import { VenueService } from './venue.service';
import CreateVenueDto from './dto/venue.dto';
import Venue from './venue.entity';

@Controller('venues')
export class VenueController {
  constructor(private venueService: VenueService) {}

  @Get()
  getAllVenues(): Promise<Venue[]> {
    return this.venueService.getAllVenus();
  }

  @Post('/create')
  createNewVenue(@Body() createVenueDto: CreateVenueDto): Promise<Venue> {
    return this.venueService.createVenue(createVenueDto);
  }
}
