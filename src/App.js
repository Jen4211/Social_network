import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="app__wrapper">
      <Header />
      <Navbar />
      <div className="wrapp__profile">
      <Profile />
      {/* <Dialogs /> */}
      </div>
    </div>
  );
}

export default App;
