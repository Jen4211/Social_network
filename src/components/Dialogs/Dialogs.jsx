import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const Dialogs = (props) => {
   return (
      <div className={style.dialogs__wrap}>
         <div className={style.dialogs__list}>
            <div className={style.dialog}>
               <NavLink to='dialog/1' className={navData => navData.isActive ? style.active : style.color }>Sveta</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to='dialog/2' className={navData => navData.isActive ? style.active : style.color }>Hleb</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to='dialog/3' className={navData => navData.isActive ? style.active : style.color }>Jenia</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to='dialog/4' className={navData => navData.isActive ? style.active : style.color }>Sasha</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to='dialog/5' className={navData => navData.isActive ? style.active : style.color }>Vova</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to='dialog/6' className={navData => navData.isActive ? style.active : style.color }>Dunik Chert</NavLink>
            </div>
         </div>
         <div className={style.messages__list}>
            <div className={style.message}>Hi</div>
            <div className={style.message}>How is your curse?</div>
            <div className={style.message}>Yo</div>
         </div>
      </div>

   );
}

export default Dialogs;