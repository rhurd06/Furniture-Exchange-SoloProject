import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Material UI
import { TextField } from '@material-ui/core';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <TextField id="outlined-basic" label="username" variant="outlined" 
          onChange={(event) => setUsername(event.target.value)}>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
          />
        </TextField>
      </div>
      <div>
        <TextField id="outlined-basic" label="email" variant="outlined" 
          onChange={(event) => setEmail(event.target.value)}>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            required
          />
        </TextField>
      </div>
      <div>
        <TextField id="outlined-basic" label="phoneNumber" variant="outlined"
          onChange={(event) => setPhoneNumber(event.target.value)}>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
          />
        </TextField>
      </div>
      <div>
        <TextField id="outlined-basic" label="password" variant="outlined"
          onChange={(event) => setPassword(event.target.value)}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
          />
        </TextField>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
