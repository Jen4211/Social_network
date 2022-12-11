import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className="app__wrapper">
      <Header />
      <Navbar />
      <div className="wrapp__profile">
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer
          store={props.store}
            // dialogsPage={props.state.dialogsPage}
            // dispatch={props.dispatch}
          />} />
          <Route path='/profile' element={<Profile
            // profilePage={props.state.profilePage}
            // dispatch={props.dispatch}
            store={props.store}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
