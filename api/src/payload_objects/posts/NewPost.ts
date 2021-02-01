import { IsNotEmpty, Max } from 'class-validator';
export default class NewPost {
  @IsNotEmpty()
  @Max(200)
  readonly title: string;
  @IsNotEmpty()
  @Max(2000)
  readonly body: string;
}
