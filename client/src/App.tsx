import React from 'react';
import './App.css';
import { RegistrationForm } from './Registration and login/registration';
import { LoginPage } from './Registration and login/login';
import {MyPlace} from './userProfile/myPlace'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
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


