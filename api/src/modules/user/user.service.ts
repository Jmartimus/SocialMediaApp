import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable, Logger } from '@nestjs/common';
import UserEntity from 'src/entities/UserEntity';
import RegisterPost from 'src/payload_objects/auth/RegisterPost';
import UserResponse from 'src/payload_objects/data/UserResponse';
import BcryptService from 'src/services/bcrypt/bcrypt.service';
import AuthMapperUtil from 'src/utils/authMappersUtils';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export default class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    private readonly userDao: InMemoryDBService<UserEntity>,
    private readonly bcryptService: BcryptService,
  ) {}

  async getUser(id: string): Promise<UserResponse> {
    const [userEntity] = this.userDao.query(record => record.id === id);
    if (!userEntity) {
      this.logger.warn('User not found');
      return;
    }

    return AuthMapperUtil.mapEntityToUserResponse(userEntity);
  }
}
