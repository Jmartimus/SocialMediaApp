import { IsNotEmpty, Max } from 'class-validator';

export default class LoginPost {
  @IsNotEmpty()
  @Max(150)
  readonly username: string;
  @IsNotEmpty()
  @Max(150)
  readonly password: string;
}
