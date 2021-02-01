import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export default interface PostEntity extends InMemoryDBEntity {
  owner: string; // owner id
  title: string;
  body: string;
  likes: number;
}
