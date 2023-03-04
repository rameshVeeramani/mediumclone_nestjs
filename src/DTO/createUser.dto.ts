import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly userName: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
