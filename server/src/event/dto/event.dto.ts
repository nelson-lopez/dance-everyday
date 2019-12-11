import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsString()
  venueName: string;
}
