import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import JwtService from 'src/services/jwt/jwt.service';
import PostsController from './posts.controller';
import PostsService from './posts.service';

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  controllers: [PostsController],
  providers: [PostsService, JwtService],
})
export class PostsModule {}
