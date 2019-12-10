import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
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

  @Get('/:id')
  getVenueById(@Param('id', ParseIntPipe) id: number): Promise<Venue> {
    return this.venueService.getVenueById(id);
  }

  @Post('/create')
  createNewVenue(
    @UsePipes(ValidationPipe)
    @Body()
    createVenueDto: CreateVenueDto,
  ): Promise<Venue> {
    return this.venueService.createVenue(createVenueDto);
  }

  @Delete('/:id')
  deleteVenue(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.venueService.deleteVenue(id);
  }
}
