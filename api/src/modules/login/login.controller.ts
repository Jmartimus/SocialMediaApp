import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response, Send } from 'express';
import AuthConstants from 'src/constants/auth.constants';
import LoginPost from 'src/payload_objects/auth/loginPost';
import UserResponse from 'src/payload_objects/data/UserResponse';
import JwtService from 'src/services/jwt/jwt.service';
import { LoginService } from './login.service';

@Controller('/login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  async loginUser(
    @Res({ passthrough: true }) res: Response,
    @Body() loginPost: LoginPost,
  ): Promise<void> {
    const user = await this.loginService.login(loginPost);

    const jwtCookie = this.jwtService.generateJwt(user.id, user.username);
    res.cookie(AuthConstants.AUTH_COOKIE, jwtCookie, {
      expires: new Date(Date.now() + 9999999),
      sameSite: false,
      path: '/',
      secure: false,
      httpOnly: false,
    });
    res.send(user);
  }
}
