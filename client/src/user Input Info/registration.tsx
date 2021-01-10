import React, { useState } from 'react';

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
    <div>
        <h1>First Name</h1>
        <input
          value={inputs.firstName}
          onChange={(e) => {
            setInputs({ ...inputs, firstName: e.target.value });
          }}
          type="firstname"
          id="firstname"
          placeholder="Enter first name"
        />
        <h1>Last Name</h1>
        <input
          value={inputs.lastName}
          onChange={(e) => {
            setInputs({ ...inputs, lastName: e.target.value });
          }}
          type="lastname"
          id="lastname"
          placeholder="Enter last name"
        />
        <h1>Email Address</h1>
        <input
          value={inputs.email}
          onChange={(e) => {
            setInputs({ ...inputs, email: e.target.value });
          }}
          type="email"
          id="email"
          placeholder="Enter email"
        />
        <h1>UserName</h1>
        <input value={inputs.username}
          onChange={(e) => {
            setInputs({ ...inputs, username: e.target.value });
          }}
          type="username"
          id="username"
          placeholder="Enter username"
        />
        <h1>Password</h1>
        <input value={inputs.password}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
          type="password"
          id="password"
          placeholder="Enter password"
        />
        <button onClick={submitForm}>Register</button>
    </div>
  );
};
