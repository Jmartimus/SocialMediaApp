import React from 'react';
import { Link } from 'react-router-dom';
import { LeftNav } from './userProfileComps/leftNav';
import { Wall } from './userProfileComps/wall';
import { userInfoState as userInfoStateAtom } from '../Atoms';
import { useRecoilValue } from 'recoil';

export function MyPlace() {
  const myUserInfo = useRecoilValue(userInfoStateAtom);
  
  

  return (
    <div>
      <div>
        <LeftNav />
        <Wall />
      </div>
      <h1>{}</h1>
    </div>
  );
}


//fix this
