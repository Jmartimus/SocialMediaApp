import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable, Logger } from '@nestjs/common';
import UserEntity from 'src/entities/UserEntity';
import LoginPost from 'src/payload_objects/auth/loginPost';
import UserResponse from 'src/payload_objects/data/UserResponse';
import BcryptService from 'src/services/bcrypt/bcrypt.service';
import AuthMapperUtil from 'src/utils/authMappersUtils';

@Injectable()
export class LoginService {
  private readonly logger = new Logger(LoginService.name);

  constructor(
    private readonly userDao: InMemoryDBService<UserEntity>,
    private readonly bcryptService: BcryptService) {};

  async login(loginPost: LoginPost): Promise<UserResponse> {
    const [userEntity] = this.userDao.query(record => record.username === loginPost.username);
    if (!userEntity) {
      this.logger.warn("User not found");
      return;
    }
    const validPassword = await this.bcryptService.compareTextMatch(loginPost.password, userEntity.password);
    if (!validPassword) {
      this.logger.warn("Password does not match user password");
      return;
    }
     return AuthMapperUtil.mapEntityToUserResponse(userEntity);
  }
}
