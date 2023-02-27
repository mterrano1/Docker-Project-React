import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import NavBar from './NavBar';

function App() {
  return (
    <UserProvider>
    <NavBar />
    <Routes>
    </Routes>
  </UserProvider>
  );
}

export default App;
