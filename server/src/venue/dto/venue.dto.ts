import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export default class CreateVenueDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;
  /**
   *
   * TODO: Properly implement @IsPhoneNumber decorator
   * * US phone numbers are still not being accepted as valid when creating venue.
   * * For now we'll only validate phone numbers as strings.
   */
  @IsOptional()
  phone: string;
}
