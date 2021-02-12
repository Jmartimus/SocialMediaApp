import React, { useState } from 'react';
import './wall.css';
import axios from 'axios';
import { userInfoState as userInfoStateAtom } from '../../Atoms';
import { useRecoilValue } from 'recoil';

interface newWallPost {
  poster: string;
  title: string;
  body: string;
  time: string;
}

interface wallPostTypes {
  poster: string;
  title: string;
  body: string;
  time: string;
}

export function Wall() {
  const myUserInfo = useRecoilValue(userInfoStateAtom);
  const fullName = myUserInfo.firstName + " " + myUserInfo.lastName;
  const [newWallPost, setNewWallPost] = useState<newWallPost>({
    poster: '',
    title: '',
    body: '',
    time: '',
  });
  const [wallPosts, setWallPosts] = useState<wallPostTypes[]>([]);

  async function wallPost() {
    const response = await axios.post(
      'http://localhost:8080/posts',
      { poster: newWallPost.poster, title: newWallPost.title, body: newWallPost.body, time: newWallPost.time },
      {
        withCredentials: true,
      }
    );
  }
  async function getUsersPosts() {
    const response = await axios.get(
      'http://localhost:8080/posts/all',
      {
        withCredentials: true,
      }
    );
    console.log(response)
    setWallPosts(response.data)
    }
  
  async function addToWall(post: newWallPost) {
    let newPosts = wallPosts.concat(post);
    // setWallPosts(newPosts);
    await wallPost();
    await getUsersPosts();
    setNewWallPost({ poster: '', title: '', body: '', time: ''});
  }

  function deletePost(i: number) {
    const newestPost = [...wallPosts];
    newestPost.splice(i, 1);
    setWallPosts(newestPost);
  }

  return (
    <div>
      <div id="wallContainer">
        <input
          value={newWallPost.title}
          placeholder="  Title of your post..."
          onChange={(e) =>
            setNewWallPost({
              poster: fullName,
              title: e.target.value,
              body: newWallPost.body,
              time: newWallPost.time,
            })
          }
          id="myPlaceWallTitle"
          type="text"
        />
        <input
          value={newWallPost.body}
          placeholder="  Write something..."
          onChange={(e) => {
            setNewWallPost({
              poster: fullName,
              title: newWallPost.title,
              body: e.target.value,
              time: new Date().toLocaleString('default', {
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              }),
            });
          }}
          id="myPlaceWallInput"
          type="text"
        />
        <button onClick={() => addToWall(newWallPost)} id="postButton">
          Post
        </button>
      </div>
      <div>
        {wallPosts.map((posts, i) => (
          <div id="wallPosts">
            <h5>{posts.poster}</h5>
            <h5 id="wallPostTitles">{posts.title}</h5>
            <h4 id="wallPostBody">{posts.body}</h4>
            <h6>Posted at {posts.time}</h6>
            <button onClick={() => deletePost(i)} id="deleteButton">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
