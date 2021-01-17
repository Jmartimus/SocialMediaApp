import { Injectable } from '@nestjs/common';
import LoginPost from 'src/payload_objects/auth/loginPost';

@Injectable()
export class LoginService {
  login(loginPost: LoginPost): LoginPost {
    return loginPost;
  }
}
