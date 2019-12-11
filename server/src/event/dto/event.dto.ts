import { IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  venueName: string;
}
