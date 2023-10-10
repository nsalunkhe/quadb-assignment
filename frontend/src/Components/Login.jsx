import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginAttempted, setLoginAttempted] = useState(false);

  const handleLogin = () => {
    const user = { username, password };
    setLoginAttempted(true);
    dispatch(login(user));
  };

  const auth = useSelector((state) => state.auth);
  const { currentUser, loginError } = auth;

  useEffect(() => {
    if (loginAttempted) {
      if (currentUser) {
        alert('Login Successful!');
        navigate('/user');
      } else if (loginError) {
        alert('Login Failed. Invalid credentials.');
      }
      setLoginAttempted(false); // Reset login attempt status
    }
  }, [loginAttempted, currentUser, loginError, navigate]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
