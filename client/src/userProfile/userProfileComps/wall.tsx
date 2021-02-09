import React, { useState } from 'react';
import './wall.css';
import axios from 'axios';

interface newWallPost {
  title: string;
  body: string;
}

interface wallPostTypes {
  title: string;
  body: string;
}

export function Wall() {
  const [newWallPost, setNewWallPost] = useState<newWallPost>({
    title: '',
    body: '',
  });
  const [wallPosts, setWallPosts] = useState<wallPostTypes[]>([]);

  async function wallPost() {
    const response = await axios.post(
      'http://localhost:8080/posts',
      { title: newWallPost.title, body: newWallPost.body },
      {
        withCredentials: true,
      }
    );
  }
  function addToWall(post: newWallPost) {
    let newPosts = wallPosts.concat(post);
    setWallPosts(newPosts);
    setNewWallPost({ title: '', body: '' });
    alert("don't forget to find a way to add current date to posts")
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
            setNewWallPost({ title: e.target.value, body: newWallPost.body })
          }
          id="myPlaceWallTitle"
          type="text"
        />
        <input
          value={newWallPost.body}
          placeholder="  Write something..."
          onChange={(e) =>
            setNewWallPost({ title: newWallPost.title, body: e.target.value })
          }
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
            <h6 id="wallPostTitles">{posts.title}</h6>
            <h4 id="wallPostBody">{posts.body}</h4>
            <button onClick={() => deletePost(i)} id="deleteButton">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
