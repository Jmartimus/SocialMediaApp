import React, { useState } from 'react';
import './wall.css';
import axios from 'axios';
import { userInfoState as userInfoStateAtom } from '../../recoil/Atoms';
import { useRecoilValue } from 'recoil';

interface newWallPost {
  poster: string;
  time: string;
  title: string;
  body: string;
}

interface wallPostTypes {
  poster: string;
  time: string;
  title: string;
  body: string;
}

export function Wall() {
  const myUserInfo = useRecoilValue(userInfoStateAtom);
  const fullName = myUserInfo.firstName + " " + myUserInfo.lastName;
  const [newWallPost, setNewWallPost] = useState<newWallPost>({
    poster: '',
    time: '',
    title: '',
    body: '',
  });
  const [wallPosts, setWallPosts] = useState<wallPostTypes[]>([]);

  async function wallPost() {
    await axios.post(
      'http://localhost:8080/posts',
      { poster: newWallPost.poster, time: newWallPost.time, title: newWallPost.title, body: newWallPost.body },
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
    await wallPost();
    await getUsersPosts();
    setNewWallPost({ poster: '', time: '', title: '', body: ''});
  }

  // async function editPost() {
  //   await getUsersPosts();
  //   setNewWallPost({ poster: '', time: '', title: '', body: '' });
  // }

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
              time: newWallPost.time,
              title: e.target.value,
              body: newWallPost.body,
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
              time: new Date().toLocaleString('default', {
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              }),
              title: newWallPost.title,
              body: e.target.value,
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
            <h6 id="wallPosterName">{posts.poster}Your name will go here</h6>
            <h6 id="timeStamp">Posted at {posts.time} "time"</h6>
            <span id="line"></span>
            <h5 id="wallPostTitles">{posts.title}</h5>
            <h4 id="wallPostBody">{posts.body}</h4>
            {/* <button onClick={() => editPost()} id="editButton">
              Edit Post
            </button> */}
            <button onClick={() => deletePost(i)} id="deleteButton">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
