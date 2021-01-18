import React from 'react';
import './App.css';
import { RegistrationForm } from './Registration and login/registration';
import { LoginPage } from './Registration and login/login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <body id="background">
        <div>
          <Switch>
            <Route path="/log-in">
              <LoginPage />
            </Route>
            <Route path="/registration">
              <RegistrationForm />
            </Route>
          </Switch>
        </div>
      </body>
    </Router>
  );
}
export default App;


