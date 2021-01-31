import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import AuthConstants from 'src/constants/auth.constants';
import RegisterPost from 'src/payload_objects/auth/RegisterPost';
import UserResponse from 'src/payload_objects/data/UserResponse';
import JwtService from 'src/services/jwt/jwt.service';
import RegistrationService from './registration.service';

@Controller('/register')
export default class RegistrationController {
  constructor(
    private readonly registrationService: RegistrationService,
    private readonly jwtService: JwtService,
  ) {}
  @Post()
  async registerUser(
    @Res({ passthrough: true }) res: Response,
    @Body() registerPost: RegisterPost,
  ): Promise<void> {
    const user = await this.registrationService.createUser(registerPost);
    const jwtCookie = this.jwtService.generateJwt(user.id, user.username);
    res.cookie(AuthConstants.AUTH_COOKIE, jwtCookie, {
      sameSite: 'lax',
      secure: false,
      httpOnly: false,
    });
    res.send(user);
  }
}
