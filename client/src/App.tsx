import React, {useState} from 'react';
import './App.css';
import { RegistrationForm } from './Registration and login/registration';
import { LoginPage } from './Registration and login/login';

function App() {
  const [page, setPage] = useState(<div/>)

  function login() {
    let mainPage = (
      <div>
        <LoginPage />
      </div>
    );
    setPage(mainPage)
  }
  function register() {
    let registrationPage = (
      <div>
        <RegistrationForm />
      </div>
    );
    setPage(registrationPage)
  }
  


  return (
    <div>
      <button onClick={login}>Log-in{page}</button>
      <button onClick={register}>register{page}</button>
    </div>
  );}
export default App;
