import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './leftNav.css';

enum Page {
  MY_PLACE,
  MY_FRIENDS,
  MY_POSTS,
  MY_PICTURES,
  MY_VIDEOS,
}
export function LeftNav() {
  const [active, setActive] = useState(Page.MY_PLACE)
  
    return (
      <div>
        <div className="leftnav" id="navSel">
          <a
            className={active === Page.MY_PLACE ? 'active' : 'btn'}
            href="#myPlace"
            onClick={() => setActive(Page.MY_PLACE)}
          >
            myPlace
          </a>
          <a
            className={active === Page.MY_FRIENDS ? 'active' : 'btn'}
            href="#friends"
            onClick={() => setActive(Page.MY_FRIENDS)}
          >
            myFriends
          </a>
          <a
            className={active === Page.MY_POSTS ? 'active' : 'btn'}
            href="#posts"
            onClick={() => setActive(Page.MY_POSTS)}
          >
            myPosts
          </a>
          <a
            className={active === Page.MY_PICTURES ? 'active' : 'btn'}
            href="#pictures"
            onClick={() => setActive(Page.MY_PICTURES)}
          >
            myPictures
          </a>
          <a
            className={active === Page.MY_VIDEOS ? 'active' : 'btn'}
            href="#videos"
            onClick={() => setActive(Page.MY_VIDEOS)}
          >
            myVideos
          </a>
        </div>
      </div>
    );
  }