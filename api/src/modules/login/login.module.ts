import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import BcryptService from 'src/services/bcrypt/bcrypt.service';
import JwtService from 'src/services/jwt/jwt.service';

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  controllers: [LoginController],
  providers: [LoginService, BcryptService, JwtService],
})
export class LoginModule {}
