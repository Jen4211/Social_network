import React from 'react';
import style from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

   let path = 'dialog/' + props.id;

   return (
         <div className={style.dialog}>
            <img src={props.src} alt="logo" />
            <NavLink to={path} className={navData => navData.isActive ? style.active : style.color}>{props.name}</NavLink>
         </div>
   )
};

export default DialogItem;