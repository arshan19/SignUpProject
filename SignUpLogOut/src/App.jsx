import React from 'react';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Profile from './Components/Profile';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
};

export default App;
