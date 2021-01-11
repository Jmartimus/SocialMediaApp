import React, { useState } from 'react';
import './registration.css';

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
        <label className="headers">First Name</label>
        <input
          value={inputs.firstName}
          onChange={(e) => {
            setInputs({ ...inputs, firstName: e.target.value });
          }}
          type="firstname"
          id="firstname"
          placeholder="Enter first name"
        />
        <label className="headers">Last Name</label>
        <input
          value={inputs.lastName}
          onChange={(e) => {
            setInputs({ ...inputs, lastName: e.target.value });
          }}
          type="lastname"
          id="lastname"
          placeholder="Enter last name"
        />
        <label className="headers">Email Address</label>
        <input
          value={inputs.email}
          onChange={(e) => {
            setInputs({ ...inputs, email: e.target.value });
          }}
          type="email"
          id="email"
          placeholder="Enter email"
        />
        <label className="headers">UserName</label>
        <input
          value={inputs.username}
          onChange={(e) => {
            setInputs({ ...inputs, username: e.target.value });
          }}
          type="username"
          id="username"
          placeholder="Enter username"
        />
        <label className="headers">Password</label>
        <input
          value={inputs.password}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
          type="password"
          id="password"
          placeholder="Enter password"
        />
        <button className="registerButton" onClick={submitForm}>
          Create Account
        </button>
      </div>
    </body>
  );
};
