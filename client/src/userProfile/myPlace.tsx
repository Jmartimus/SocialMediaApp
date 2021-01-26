import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { LeftNav } from './userProfileComps/leftNav';
import axios from 'axios';

export function MyPlace() {
  const [currentInfo, setCurrentInfo] = useState('');

  // async function retrieveInfo() {
  //   const response = await axios.get('http://localhost:8080/register')
  //     .then(res => {
  //       setCurrentInfo(response)
  //     });
  //   return console.log(response.email)
  // }
  // useEffect(() => {
  //   const retrieveData = async () => {
  //     const response = await axios(
  //       'http://localhost:8080/register'
  //     );

  //     setCurrentInfo(response.currentInfo);
  //   }; retrieveData();
  // }, []);
  
  return (
    <div>
      <div>
        <LeftNav />
      </div>
     <h1>{currentInfo}</h1>
    </div>
  );
  }

