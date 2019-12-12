import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateVenueDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  location: string;
  @IsNotEmpty()
  @IsString()
  contact: string;
}
