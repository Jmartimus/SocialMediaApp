import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";

export default interface UserEntity extends InMemoryDBEntity {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}