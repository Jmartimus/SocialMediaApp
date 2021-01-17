import UserEntity from "src/entities/UserEntity";
import UserResponse from "src/payload_objects/data/UserResponse";

export default class AuthMapperUtil {
  static mapEntityToUserResponse(userEntity: UserEntity): UserResponse {
    return {
      username: userEntity.username,
      firstName: userEntity.firstName,
      lastName: userEntity.lastName,
      email: userEntity.email,
    }
  }
}