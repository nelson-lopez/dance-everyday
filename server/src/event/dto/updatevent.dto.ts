import { IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  date: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  venueName: string;
}
