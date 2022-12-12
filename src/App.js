import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <div className="app__wrapper">
      <Header />
      <Navbar />
      <div className="wrapp__profile">
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
