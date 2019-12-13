import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
  Logger,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/createevent.dto';
import { Event } from './event.entity';
import { FilterEventDto } from './dto/filter-event.dto';
import { EventUpperCasePipe } from './pipes/event-uppercase.pipe';
import { ConvertDatePipe } from './pipes/convertdate.pipe';
import { UpdateEventDto } from './dto/updatevent.dto';

@Controller('events')
export class EventController {
  private logger = new Logger('EventController');

  constructor(private eventService: EventService) {}

  @Get()
  getEvents(@Query() filterEventDto: FilterEventDto): Promise<Event[]> {
    return this.eventService.getEvents(filterEventDto);
  }

  @Get('/:id')
  getEventById(@Param('id', ParseIntPipe) id: number) {
    return this.eventService.getEventById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  /**
   * * As it stands ValidationPipe handles our generic CreateEventDto validation
   * * and wraps itself around the entire method.
   *
   * * Specific request body parameters are transformed to
   * * sanitized values for the database to receive with more specific Pipes
   * * (EventUpperCasePipe, ConvertDatePipe...).
   *
   * TODO: Feels overly verbose, considering condensing pipes to create cleaner controller
   */
  createEvent(
    @Body()
    createEventDto: CreateEventDto,
    @Body('name', EventUpperCasePipe)
    name: string,
    @Body('date', ConvertDatePipe)
    date: string,
    @Body('venueName', EventUpperCasePipe)
    venueName: string,
  ): Promise<Event> {
    this.logger.verbose(`${name} on ${date} created for venue ${venueName}`);
    return this.eventService.createEvent(createEventDto, name, date, venueName);
  }

  /**
   * TODO: Possible refactor along the same lines as createEvent method above
   */
  @Patch('/:id/update')
  @UsePipes(ValidationPipe)
  updateEvent(
    @Body()
    updateEventDto: UpdateEventDto,
    @Param('id', ParseIntPipe) id: number,
    @Body('name', EventUpperCasePipe)
    name: string,
    @Body('date', ConvertDatePipe)
    date: string,
  ): Promise<Event> {
    this.logger.verbose(`Event updated for event ${updateEventDto.name}`);
    return this.eventService.updateEvent(updateEventDto, id, name, date);
  }

  @Delete('/:id')
  deleteEvent(@Param('id', ParseIntPipe) id: number): void {
    this.logger.verbose(`Event with ${id} deleted`);
    this.eventService.deleteEvent(id);
  }
}
