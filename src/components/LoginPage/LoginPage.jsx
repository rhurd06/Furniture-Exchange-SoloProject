import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import './LoginPage.css';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <h1 className="loginHeader">Furniture Exchange</h1>
      <LoginForm />
      
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register Here
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
