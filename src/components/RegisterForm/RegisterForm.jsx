import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TextField, AppBar, Card, CardActions, 
  CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } 
  from '@material-ui/core';
import WeekendTwoToneIcon from '@material-ui/icons/WeekendTwoTone';


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
        <TextField id="outlined-basic" label="username" variant="outlined" >
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </TextField>
      </div>
      <div>
        <TextField id="outlined-basic" label="email" variant="outlined" >
          Email:
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </TextField>
      </div>
      <div>
        <TextField id="outlined-basic" label="phoneNumber" variant="outlined">
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </TextField>
      </div>
      <div>
        <TextField id="outlined-basic" label="password" variant="outlined">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
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
