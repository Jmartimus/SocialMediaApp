import { Body, Controller, Get, Post } from '@nestjs/common';
import LoginPost from 'src/payload_objects/auth/loginPost';
import { LoginService } from './login.service';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  getHello(@Body() loginPost: LoginPost): LoginPost {
    return this.loginService.login(loginPost);
  }
}
