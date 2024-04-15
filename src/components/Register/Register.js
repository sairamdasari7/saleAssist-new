import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Simulate user registration
    // Replace this with actual registration logic
    console.log('Registering with email:', email, 'phone number:', phoneNumber, 'and password:', password);
    
    // Store form data in localStorage
    localStorage.setItem('userData', JSON.stringify({ email, phoneNumber, password }));
    
    // Redirect to login page after successful registration
    navigate('/login');
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleRegisterSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
