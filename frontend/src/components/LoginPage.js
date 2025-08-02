import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="card" style={{ textAlign: 'center' }}>
        <h1>Intern Portal Login</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
