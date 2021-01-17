import { Body, Controller, Post } from "@nestjs/common";
import RegisterPost from "src/payload_objects/auth/RegisterPost";
import UserResponse from "src/payload_objects/data/UserResponse";
import RegistrationService from "./registration.service";

@Controller("/register")
export default class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {};
  @Post()
  async registerUser(@Body() registerPost: RegisterPost): Promise<UserResponse> {
    return await this.registrationService.createUser(registerPost);
  }
}