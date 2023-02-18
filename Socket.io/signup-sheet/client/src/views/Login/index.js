import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.scss';
import { authenticateUser } from '../../services/userService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failedMessage, setFailedMessage] = useState('');
  const navigate = useNavigate();

  const submitForm = async () => {
    setFailedMessage('');

    const user = await authenticateUser(username, password);
    if (user) {
      navigate('/dashboard');
    } else {
      setFailedMessage('Authentication failed');
    }
  };

  return (
    <div className="login-container">
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField 
            id="username-textfield" 
            label="Username" 
            value={username}
            onChange={evt => setUsername(evt.target.value)}
            error={username.length === 0}
            helperText="Username must be provided"
            variant="outlined" />
        </div>
        <div>
          <TextField 
            id="password-textfield" 
            type="password"
            label="Password" 
            value={password}
            onChange={evt => setPassword(evt.target.value)}
            error={password.length === 0}
            helperText="Password must be provided"
            variant="outlined" />
        </div>
        <Button onClick={() => submitForm()} variant="contained">Next</Button>
        <p>{failedMessage}</p>
      </Box>
    </div>
  )
}

export default Login;