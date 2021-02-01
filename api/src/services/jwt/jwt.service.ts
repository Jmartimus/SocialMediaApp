import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export default class JwtService {
  private readonly MOVE_ME_TO_ENV: string = 'move_this_to_env!!!!';

  generateJwt(id: string, username: string): string {
    const token = jwt.sign(
      {
        id,
        username,
      },
      this.MOVE_ME_TO_ENV,
      { expiresIn: '1h' },
    );
    return token;
  }

  readJwt(token: string): object | string {
    try {
      return jwt.verify(token, this.MOVE_ME_TO_ENV);
    } catch (e) {
      console.error('could not verify jwt', e);
      throw e;
    }
  }
}
