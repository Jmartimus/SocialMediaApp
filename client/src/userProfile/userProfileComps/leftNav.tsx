import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './leftNav.css';

export function LeftNav() {
  return (
    <div>
      <div className="leftnav">
        <a className="active" href="#myPlace">
          myPlace
        </a>
        <a href="#friends">myFriends</a>
        <a href="#posts">myPosts</a>
        <a href="#pictures">myPictures</a>
        <a href="#videos">myVideos</a>
      </div>
    </div>
  );
}