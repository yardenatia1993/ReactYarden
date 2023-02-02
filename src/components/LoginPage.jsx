import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dataContext } from './DataContextProvider';
import './LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {getUser} = useContext(dataContext)
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = getUser(email, password);
    if (!user) {
      setError('Invalid email or password');
    } else {
      // Perform successful login logic here
      navigate('/Home');
      setError('');
    }
  }

  return (
    
    <form onSubmit={handleSubmit} className='form-container'>
      <label className='form-label'>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className='form-input'/>
      </label>
      <label className='form-label'>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className='form-input'/>
      </label>
      <button type="submit" className='form-button'>Login</button>
      <Link to="/register">Register</Link>
      {error && <p className='form-error'>{error}</p>}
    </form>
  );
}

export default LoginPage;
