import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

// Material UI imports
import { TextField } from '@material-ui/core';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login


  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <TextField id="outlined-basic" label="username" variant="outlined"
          onChange={(event) => setUsername(event.target.value)}>
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
          />
        </TextField>
      </div>
      <div>
        <TextField id="outlined-basic" label="password" type="password" variant="outlined"
          onChange={(event) => setPassword(event.target.value)}>
          Password:
          <input
            name="password"
            required
            value={password}
            />
        </TextField>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
