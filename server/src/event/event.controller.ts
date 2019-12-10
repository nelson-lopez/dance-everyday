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
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/event.dto';
import { Event } from './event.entity';
import { FilterEventDto } from './dto/filter-event.dto';

@Controller('events')
export class EventController {
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
  ): Promise<Event> {
    return this.eventService.createEvent(createEventDto);
  }

  @Patch('/:id/update')
  @UsePipes(ValidationPipe)
  updateEvent(
    @Body()
    createEventDto: CreateEventDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Event> {
    return this.eventService.updateEvent(createEventDto, id);
  }

  @Delete('/:id')
  deleteEvent(@Param('id', ParseIntPipe) id: number): void {
    this.eventService.deleteEvent(id);
  }
}
