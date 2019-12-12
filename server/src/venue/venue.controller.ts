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
  Logger,
} from '@nestjs/common';
import { VenueService } from './venue.service';
import CreateVenueDto from './dto/venue.dto';
import Venue from './venue.entity';
import { VenueUpperCasePipe } from './pipes/venue-uppercase.pipe';

@Controller('venues')
export class VenueController {
  private logger = new Logger('VenueController');

  constructor(private venueService: VenueService) {}

  @Get()
  getAllVenues(): Promise<Venue[]> {
    return this.venueService.getAllVenus();
  }

  @Get('/:id')
  getVenueById(@Param('id', ParseIntPipe) id: number): Promise<Venue> {
    this.logger.verbose(`Fetching venue by the id of ${id}`);
    return this.venueService.getVenueById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createNewVenue(
    @Body()
    createVenueDto: CreateVenueDto,
    @Body('name', VenueUpperCasePipe) name: string,
  ): Promise<Venue> {
    this.logger.verbose(
      `Created venue with the name of ${name} and contact information of ${createVenueDto.contact}`,
    );
    return this.venueService.createVenue(createVenueDto, name);
  }

  @Delete('/:id')
  deleteVenue(@Param('id', ParseIntPipe) id: number): Promise<void> {
    this.logger.verbose(`Deleted venue with ID of ${id}`);
    return this.venueService.deleteVenue(id);
  }
}
