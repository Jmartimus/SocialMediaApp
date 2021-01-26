import axios from 'axios';
import React, { useState } from 'react';
import './registration.css';
import { Link } from 'react-router-dom';

//make an option for sign-in and sign-up on the same page.  
//It will only switch the middle window.

export const RegistrationForm = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  async function registrationSubmit() {
    const response = await axios.post('http://localhost:8080/register', {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      email: inputs.email,
      username: inputs.username,
      password: inputs.password,
    });
    console.log(response);
  }

  return (
    <div id="background">
      <div className="registrationContainer">
        <h1 className="header">myCircle</h1>
        <input
          className="input"
          value={inputs.firstName}
          onChange={(e) => {
            setInputs({ ...inputs, firstName: e.target.value });
          }}
          type="text"
          id="firstname"
          placeholder="  First name"
        />

        <input
          className="input"
          value={inputs.lastName}
          onChange={(e) => {
            setInputs({ ...inputs, lastName: e.target.value });
          }}
          type="text"
          id="lastname"
          placeholder="  Last name"
        />

        <input
          className="input"
          value={inputs.email}
          onChange={(e) => {
            setInputs({ ...inputs, email: e.target.value });
          }}
          type="text"
          id="email"
          placeholder="  Email Address"
        />

        <input
          className="input"
          value={inputs.username}
          onChange={(e) => {
            setInputs({ ...inputs, username: e.target.value });
          }}
          type="text"
          id="username"
          placeholder="  Username"
        />

        <input
          className="input"
          value={inputs.password}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
          type="text"
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

