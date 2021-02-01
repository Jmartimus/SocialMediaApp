import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable, Logger } from '@nestjs/common';
import UserEntity from 'src/entities/UserEntity';
import UserResponse from 'src/payload_objects/data/UserResponse';
import AuthMapperUtil from 'src/utils/authMappersUtils';

@Injectable()
export default class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(private readonly userDao: InMemoryDBService<UserEntity>) {}

  async getUser(id: string): Promise<UserResponse> {
    const [userEntity] = this.userDao.query(record => record.id === id);
    if (!userEntity) {
      this.logger.warn('User not found');
      return;
    }

    return AuthMapperUtil.mapEntityToUserResponse(userEntity);
  }
}
