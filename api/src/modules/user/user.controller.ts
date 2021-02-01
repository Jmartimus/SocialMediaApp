import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Req,
} from '@nestjs/common';
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
    if (!jwtCookie) {
      throw new HttpException(
        'No authentication token',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const jwt = this.jwtService.readJwt(jwtCookie);
    if (!jwt['id']) {
      throw new HttpException('ID is missing frm jwt', HttpStatus.UNAUTHORIZED);
    }
    const user = await this.userService.getUser(jwt['id']);
    if (!user) {
      throw new HttpException(
        `User with id ${jwt['id']} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }
}
