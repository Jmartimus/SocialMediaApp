import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import AuthConstants from 'src/constants/auth.constants';
import NewPost from 'src/payload_objects/posts/NewPost';
import JwtService from 'src/services/jwt/jwt.service';
import PostsService from './posts.service';

@Controller('/posts')
export default class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly jwtService: JwtService,
  ) {}
  @Post()
  newPost(@Req() req: Request, @Body() newPost: NewPost) {
    const jwtCookie = req.cookies[AuthConstants.AUTH_COOKIE];
    if (!jwtCookie) {
      throw new HttpException(
        'No authentication token',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const jwt = this.jwtService.readJwt(jwtCookie);
    if (!jwt['id']) {
      throw new HttpException(
        'ID is missing from jwt',
        HttpStatus.UNAUTHORIZED,
      );
    }
    this.postsService.createPost(newPost, jwt['id']);
  }
}
