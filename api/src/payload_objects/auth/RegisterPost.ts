import { IsNotEmpty, Max } from 'class-validator';

export default class RegisterPost {
  @IsNotEmpty()
  @Max(150)
  readonly username: string;
  @IsNotEmpty()
  @Max(150)
  readonly password: string;
  @IsNotEmpty()
  @Max(150)
  readonly firstName: string;
  @IsNotEmpty()
  @Max(150)
  readonly lastName: string;
  @IsNotEmpty()
  @Max(150)
  readonly email: string;
}
