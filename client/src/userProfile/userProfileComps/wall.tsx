import React, { useState } from 'react';

//Find a way to not have a delele button already there when page renders. and fix wallposts.


export function Wall() {
  const [newWallPost, setNewWallPost] = useState('');
  const [wallPosts, setWallPosts] = useState(['']);

  function addToWall(post: string) {
    let newPost = post;
    setWallPosts([...wallPosts, newPost]);
    setNewWallPost('');
  }
  function deletePost(i: number) {
    const newestPost = [...wallPosts];
    newestPost.splice(i, 1);
    setWallPosts(newestPost);
  }
  return (
    <div>
      <input
        value={newWallPost}
        onChange={(e) => setNewWallPost(e.target.value)}
      />
      <button onClick={() => addToWall(newWallPost)}>Wall post</button>
      <ul>
        {wallPosts.map((post, i) => (
          <li>
            {wallPosts}
            <button onClick={() => deletePost(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
