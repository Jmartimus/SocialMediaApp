import React, { useState } from 'react';

export const LoginPage = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  
  function loginInput() {
    console.log(inputs);
  }
  return (
      <div>
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
        <button className="registerButton" onClick={loginInput}>
          log-in
        </button>
      </div>
  );
};

