import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import NotesPage from './components/NotesPage';
import Page404 from './components/Page-404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/notes" element={<NotesPage/>} />
      <Route path='*' element={<Page404/>}/>
    </Routes>


  );
}

export default App;
