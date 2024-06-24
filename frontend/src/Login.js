import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login/', { 
        email, 
        password 
      });
      console.log(response.data);
      navigate('/greeting/');
    } catch (error) {
      console.log('Login failed', error);
    }
  };

  const goToSignup = () => {
    navigate('/signup/'); 
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={goToSignup}>Don't have an account? Sign Up</button>
    </div>
  );
}

export default Login;
