import { Controller, Get, Logger, Req } from '@nestjs/common';
import { Request } from 'express';
import AuthConstants from 'src/constants/auth.constants';
import UserResponse from 'src/payload_objects/data/UserResponse';
import JwtService from 'src/services/jwt/jwt.service';
import UserService from './user.service';

@Controller('/user')
export default class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  @Get('/me')
  async getUserDetails(@Req() req: Request): Promise<UserResponse> {
    const jwtCookie = req.cookies[AuthConstants.AUTH_COOKIE];
    const jwt = await this.jwtService.readJwt(jwtCookie);
    const user = await this.userService.getUser(jwt['id']);
    return user;
  }
}
