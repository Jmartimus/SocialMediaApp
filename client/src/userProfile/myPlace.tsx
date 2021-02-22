import React from 'react';
import { Link } from 'react-router-dom';
import { LeftNav } from './userProfileComps/leftNav';
import { Wall } from './userProfileComps/wall';
import { userInfoState as userInfoStateAtom } from '../Atoms';
import { useRecoilValue } from 'recoil';
import './myPlace.css';

export function MyPlace() {
  const myUserInfo = useRecoilValue(userInfoStateAtom);
  
  

  return (
    <div id="myPlaceBackground">
      <h1 id="welcome">Welcome back to myCircle,  
         {myUserInfo.firstName} {myUserInfo.lastName}
      </h1>
      <div>
        <LeftNav />
        <Wall />
      </div>
    </div>
  );
}
