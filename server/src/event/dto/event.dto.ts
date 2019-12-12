import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsString()
  venueName: string;
}
