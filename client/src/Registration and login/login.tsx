import axios from 'axios';
import React, { useState } from 'react';
import {Link } from 'react-router-dom';

export const LoginPage = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  
  async function loginInput() {
    const response = await axios.post("http://localhost:8080/login", { username: inputs.username, password: inputs.password })
    console.log(response);
  }
  return (
    <div id="background">
      <div className="loginContainer">
        <h1 className="header">myCircle</h1>
        <input
          className="input"
          value={inputs.username}
          onChange={(e) => {
            setInputs({ ...inputs, username: e.target.value });
          }}
          type="username"
          id="username"
          placeholder="  Username"
        />
        <input
          className="input"
          value={inputs.password}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
          type="password"
          id="password"
          placeholder="  Password"
        />
        <button className="topButton" onClick={loginInput}>
          LOG IN
        </button>
        <Link to="/registration">
          <button className="loginLink">
            No account? Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

