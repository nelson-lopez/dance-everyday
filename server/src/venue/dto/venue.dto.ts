import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator';

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
  @IsPhoneNumber('1')
  phone: string;
}
