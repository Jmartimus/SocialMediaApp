import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module';
import { RegistrationModule } from './modules/registration/registration.module';

@Module({
  imports: [LoginModule, RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
