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
import { CreateEventDto } from './dto/event.dto';
import { Event } from './event.entity';
import { FilterEventDto } from './dto/filter-event.dto';
import { UpperCasePipe } from './pipes/uppercase.pipe';
import { ConvertDatePipe } from './pipes/convertdate.pipe';

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
  createEvent(
    @Body()
    createEventDto: CreateEventDto,
    @Body('name', UpperCasePipe)
    name: string,
    @Body('date', ConvertDatePipe)
    date: string,
  ): Promise<Event> {
    this.logger.verbose(
      `${name} on ${date} created for venue ${createEventDto.venueName}`,
    );
    return this.eventService.createEvent(createEventDto, name);
  }

  @Patch('/:id/update')
  @UsePipes(ValidationPipe)
  updateEvent(
    @Body()
    createEventDto: CreateEventDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Event> {
    this.logger.verbose(`Event updated for event ${createEventDto.name}`);
    return this.eventService.updateEvent(createEventDto, id);
  }

  @Delete('/:id')
  deleteEvent(@Param('id', ParseIntPipe) id: number): void {
    this.logger.verbose(`Event with ${id} deleted`);
    this.eventService.deleteEvent(id);
  }
}
