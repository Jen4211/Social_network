import React from 'react';
import style from './Navbar.module.css';


const Navbar = (props) => {
   return(
      <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>Profile</li>
        <li className={style.item}>Messages</li>
        <li className={style.item}>News</li>
        <li className={style.item}>Music</li>
        <li className={style.item}>Settings</li>
      </ul>
    </nav>
   )
};

export default Navbar;