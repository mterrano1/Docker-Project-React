import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import NavBar from './NavBar';
import Home from '../pages/Home';

function App() {
  return (
    <UserProvider>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  </UserProvider>
  );
}

export default App;
