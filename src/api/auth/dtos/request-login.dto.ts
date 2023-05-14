import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RequestLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
