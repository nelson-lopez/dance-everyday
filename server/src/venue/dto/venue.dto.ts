import { IsNotEmpty } from 'class-validator';

export default class CreateVenueDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  location: string;
  @IsNotEmpty()
  contact: string;
}
