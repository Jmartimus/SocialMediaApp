import React, { useState } from 'react';
import './registration.css';

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

  function submitForm() {
    console.log(inputs);
  }
  return (
    <body id="background">
      <div className="wrapper">
        <input
          className="input"
          value={inputs.firstName}
          onChange={(e) => {
            setInputs({ ...inputs, firstName: e.target.value });
          }}
          type="firstname"
          id="firstname"
          placeholder="First name"
        />

        <input
          className="input"
          value={inputs.lastName}
          onChange={(e) => {
            setInputs({ ...inputs, lastName: e.target.value });
          }}
          type="lastname"
          id="lastname"
          placeholder="Last name"
        />

        <input
          className="input"
          value={inputs.email}
          onChange={(e) => {
            setInputs({ ...inputs, email: e.target.value });
          }}
          type="email"
          id="email"
          placeholder="Email Address"
        />

        <input
          className="input"
          value={inputs.username}
          onChange={(e) => {
            setInputs({ ...inputs, username: e.target.value });
          }}
          type="username"
          id="username"
          placeholder="Username"
        />

        <input
          className="input"
          value={inputs.password}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
          type="password"
          id="password"
          placeholder="Password"
        />
        <button className="registerButton" onClick={submitForm}>
          Create Account
        </button>
      </div>
    </body>
  );
};

