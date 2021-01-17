import { InMemoryDBService } from "@nestjs-addons/in-memory-db";
import { Injectable } from "@nestjs/common";
import UserEntity from "src/entities/UserEntity";
import RegisterPost from "src/payload_objects/auth/RegisterPost";
import UserResponse from "src/payload_objects/data/UserResponse";
import BcryptService from "src/services/bcrypt/bcrypt.service";
import AuthMapperUtil from "src/utils/authMappersUtils";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export default class RegistrationService {
  constructor(
    private readonly newUserDao: InMemoryDBService<UserEntity>,
    private readonly bcryptService: BcryptService,
    ) {};

  async createUser(registerPost: RegisterPost): Promise<UserResponse> {
    const userEntity: UserEntity = {
      id: uuidv4(),
      username: registerPost.username,
      password: await this.bcryptService.hashText(registerPost.password),
      firstName: registerPost.firstName,
      lastName: registerPost.lastName,
      email: registerPost.email,
    }
    const createdUser = this.newUserDao.create(userEntity);
    return AuthMapperUtil.mapEntityToUserResponse(createdUser);
  }
}