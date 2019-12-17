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
  getVenueById(
    /**
     * * We have to run a built in Nest ParseIntPipe to insure that our we receive
     * * a number back from our controller before it's passed down to service
     */
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<Venue> {
    this.logger.verbose(`Fetching venue by the id of ${id}`);
    return this.venueService.getVenueById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createNewVenue(
    @Body()
    createVenueDto: CreateVenueDto,
    /**
     * * Using the custom built UpperCasePipe we can safely sanitize the name value
     * * in our request body and confidently pass it's value down to our Repository/Data layer
     *  */

    @Body('name', VenueUpperCasePipe) name: string,
  ): Promise<Venue> {
    this.logger.verbose(
      `Created venue with the name of ${name} and contact information of ${createVenueDto.phone}`,
    );
    return this.venueService.createVenue(createVenueDto, name);
  }

  @Delete('/:id')
  deleteVenue(@Param('id', ParseIntPipe) id: number): Promise<void> {
    this.logger.verbose(`Deleted venue with ID of ${id}`);
    return this.venueService.deleteVenue(id);
  }
}
