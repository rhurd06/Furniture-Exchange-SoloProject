import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <button 
        type="button" 
        onClick={() => {
          history.push('/browseFurniture');
        }}
      >
        Browse Furniture
      </button>
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
