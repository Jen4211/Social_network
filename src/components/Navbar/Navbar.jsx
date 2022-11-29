import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = (props) => {
   return(
      <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink to='/profile' className={navData => navData.isActive ? style.active : style.item }>Profile</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/dialogs' className={navData => navData.isActive ? style.active : style.item }>Messages</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/news' className={navData => navData.isActive ? style.active : style.item }>News</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/music' className={navData => navData.isActive ? style.active : style.item }>Music</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/settings' className={navData => navData.isActive ? style.active : style.item }>Settings</NavLink>
        </li>
      </ul>
    </nav>
   )
};

export default Navbar;