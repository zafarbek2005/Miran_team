import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Company from './Components/Company/Company';
import Updates from './Components/Updates/Update';
import Auth from './Components/Auth/Auth';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<Auth />}>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/updates' element={<Updates />} />
      </Route>
    </Routes>
  );
};

export default App;
