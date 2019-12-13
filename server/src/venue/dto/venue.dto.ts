import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

export default class CreateVenueDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  phone: string;
}
