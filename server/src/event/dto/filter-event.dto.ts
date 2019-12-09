import { IsNotEmpty, IsOptional } from 'class-validator';

export class FilterEventDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
