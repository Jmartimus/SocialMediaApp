import axios from 'axios';
import React from 'react';
import './registration.css';
import { Link, useHistory } from 'react-router-dom';
import { userInfoState as userInfoStateAtom } from '../Atoms';
import { useRecoilState } from 'recoil';

export const RegistrationForm = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(userInfoStateAtom);

  async function registrationSubmit() {
    await axios.post(
      'http://localhost:8080/register',
      {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        username: userInfo.username,
        password: userInfo.password,
      },
      {
        withCredentials: true,
      }
    );
    history.push('/myPlace');
  }

  return (
    <div id="background">
      <div className="registrationContainer">
        <h1 className="header">myCircle</h1>
        <input
          className="input"
          value={userInfo.firstName}
          onChange={(e) => {
            setUserInfo({ ...userInfo, firstName: e.target.value });
          }}
          type="text"
          id="firstname"
          placeholder="  First name"
        />

        <input
          className="input"
          value={userInfo.lastName}
          onChange={(e) => {
            setUserInfo({ ...userInfo, lastName: e.target.value });
          }}
          type="text"
          id="lastname"
          placeholder="  Last name"
        />

        <input
          className="input"
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo({ ...userInfo, email: e.target.value });
          }}
          type="text"
          id="email"
          placeholder="  Email Address"
        />

        <input
          className="input"
          value={userInfo.username}
          onChange={(e) => {
            setUserInfo({ ...userInfo, username: e.target.value });
          }}
          type="text"
          id="username"
          placeholder="  Username"
        />

        <input
          className="input"
          value={userInfo.password}
          onChange={(e) => {
            setUserInfo({ ...userInfo, password: e.target.value });
          }}
          type="password"
          id="password"
          placeholder="  Password"
        />
        <button className="topButton" onClick={registrationSubmit}>
          SIGN UP
        </button>
        <Link to="/log-in">
          <button className="loginLink">Have an account? Log-in</button>
        </Link>
      </div>
    </div>
  );
};
