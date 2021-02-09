import React, { useEffect } from 'react';
import './App.css';
import { RegistrationForm } from './Registration and login/registration';
import { LoginPage } from './Registration and login/login';
import { MyPlace } from './userProfile/myPlace';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userInfoState as userInfoStateAtom } from './Atoms';
import axios, { AxiosResponse } from 'axios';

function App() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoStateAtom);

  function checkPath() {
    const { pathname } = window.location;
    if (!pathname.includes('registration') && !pathname.includes('log-in')) {
      window.location.replace('http://localhost:3000/log-in');
    }
  }

  async function getUserInfoIfMissing() {
    let response: AxiosResponse;
    try {
      response = await axios.get('http://localhost:8080/user/me', {
        withCredentials: true,
      });
    } catch (e) {
      console.error(e);
      checkPath();
      return;
    }
    if (!response?.data) {
      checkPath();
      return;
    }
    const { data } = response;
    if (!userInfo.username) {
      setUserInfo({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        password: data.password,
      });
    }
  }

  useEffect(() => {
    getUserInfoIfMissing();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/log-in">
            <LoginPage />
          </Route>
          <Route path="/registration">
            <RegistrationForm />
          </Route>
          <Route path="/myPlace">
            <MyPlace />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
