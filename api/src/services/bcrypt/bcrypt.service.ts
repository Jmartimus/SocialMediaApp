import { Injectable } from "@nestjs/common";
import { compare, hash } from 'bcrypt';

@Injectable()
export default class BcryptService {
  private readonly SALT_ROUNDS: number = 7;

  async hashText(text: string): Promise<string> {
    return await hash(text, this.SALT_ROUNDS);
  }

  async compareTextMatch(textToTest: string, original: string): Promise<boolean> {
    return await compare(textToTest, original);
  }
}