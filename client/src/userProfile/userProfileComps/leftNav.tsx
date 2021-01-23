import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './leftNav.css';

export function LeftNav() {
  function changeActive() {
    
  }

  
    return (
      <div>
        <div className="leftnav" id="navSel">
          <a className="active" href="#myPlace">
            myPlace
        </a>
          <a className="btn" href="#friends">
            myFriends
        </a>
          <a className="btn" href="#posts">
            myPosts
        </a>
          <a className="btn" href="#pictures">
            myPictures
        </a>
          <a className="btn" href="#videos">
            myVideos
        </a>
        </div>
      </div>
    );
  }