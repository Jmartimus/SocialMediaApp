import { Module } from '@nestjs/common';
import RegistrationController from './registration.controller';
import RegistrationService from './registration.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import BcryptService from 'src/services/bcrypt/bcrypt.service';

@Module({
  imports: [InMemoryDBModule.forRoot({})],
  controllers: [RegistrationController],
  providers: [RegistrationService, BcryptService],
})
export class RegistrationModule {}
