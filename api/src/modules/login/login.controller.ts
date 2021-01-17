import { Body, Controller, Get, Post } from '@nestjs/common';
import LoginPost from 'src/payload_objects/auth/loginPost';
import UserResponse from 'src/payload_objects/data/UserResponse';
import { LoginService } from './login.service';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async loginUser(@Body() loginPost: LoginPost): Promise<UserResponse> {
    return await this.loginService.login(loginPost);
  }
}