import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <div className="app__wrapper">
      <Header />
      <Navbar />
      <div className="wrapp__profile">
      <Routes>
        <Route path='/dialogs' element={<Dialogs />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
