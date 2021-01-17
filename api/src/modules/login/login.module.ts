import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import BcryptService from 'src/services/bcrypt/bcrypt.service';

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  controllers: [LoginController],
  providers: [LoginService, BcryptService],
})
export class LoginModule {}
