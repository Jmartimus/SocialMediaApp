import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import JwtService from 'src/services/jwt/jwt.service';
import UserController from './user.controller';
import UserService from './user.service';

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  controllers: [UserController],
  providers: [UserService, JwtService],
})
export class UserModule {}
