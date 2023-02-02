import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from './DataContextProvider';
import './RegisterPage.css'


function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const {checkUserExist,addUser} = useContext(dataContext)
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("password not match");
    } else if(checkUserExist(email)) {
      setError("user already exists");
    }
    else if(password===""||confirmPassword===""||email===""){
      setError('You must fill all the fields')
    }else{
      // Register user
      addUser(email,password);
      alert("hello "+email.substring(0,email.indexOf('@')))
      navigate('/');
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit} className='form-container'>
      <label className='form-label'>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className='form-input'/>
      </label>
      <label className='form-label'>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className='form-input'/>
      </label>
      <label className='form-label'>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className='form-input'/>
      </label>
      <button type="submit" className='form-button'>Register</button>
      {error && <p className='form-error'>{error}</p>}
    </form>
    </div>
  );
}

export default RegisterPage;
