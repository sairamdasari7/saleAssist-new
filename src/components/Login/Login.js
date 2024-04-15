import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email === username && userData.password === password) {
      // Navigate to home page if credentials match
      navigate('/');
    } else {
      // Display error message if credentials are invalid
      alert('Invalid username or password');
    }
  };
  

  return (
    <div className="container"> {/* Apply container class */}
      <h1 className='heading'>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
