import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import PostEntity from 'src/entities/PostEntity';
import NewPost from 'src/payload_objects/posts/NewPost';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export default class PostsService {
  constructor(private readonly postsDao: InMemoryDBService<PostEntity>) {}
  createPost(newPost: NewPost, owner: string) {
    const postEntity: PostEntity = {
      id: uuidv4(),
      owner,
      title: newPost.title,
      body: newPost.body,
      likes: 0,
    };
    this.postsDao.create(postEntity);
  }
  getAllPostsForUser(ownerId: string): PostEntity[] {
    return this.postsDao.query(r => r.owner === ownerId);
  }
}
