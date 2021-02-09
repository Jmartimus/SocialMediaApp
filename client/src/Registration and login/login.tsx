import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { userInfoState as userInfoStateAtom } from '../Atoms';
import { useRecoilState } from 'recoil';
import React, {useState} from 'react';


//takes inputs and uses this info to get info back from the server.  Then it uses the info retrieved to set the global state and takes you to myPlace immediately.
export const LoginPage = () => {
  const history = useHistory();
  const [, setUserInfo] = useRecoilState(userInfoStateAtom);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function loginInput() {
    try {
      const response = await axios.post(
        'http://localhost:8080/login',
        { username: userName, password: password },
        {
          withCredentials: true,
        }
      );
      if (response.status > 399) {
        alert('Could not log-in');
        return;
      }
      setUserInfo(response.data);
      history.push('/myPlace');
    }
    catch (e) {
      alert('Could not log-in!');
    } 
  }
  return (
    <div id="background">
      <div className="loginContainer">
        <h1 className="header">myCircle</h1>
        <input
          className="input"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="username"
          id="username"
          placeholder="  Username"
        />
        <input
          className="input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          id="password"
          placeholder="  Password"
        />
        <button className="topButton" onClick={loginInput}>
          LOG IN
        </button>
        <Link to="/registration">
          <button className="loginLink">No account? Sign up</button>
        </Link>
      </div>
    </div>
  );
};
