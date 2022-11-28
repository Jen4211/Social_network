import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = (props) => {
   return(
      <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/news'>News</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/music'>Music</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/settings'>Settings</NavLink>
        </li>
      </ul>
    </nav>
   )
};

export default Navbar;