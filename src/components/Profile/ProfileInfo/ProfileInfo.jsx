import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
   return (
      <div>
         <img className={style.background} src='https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg' alt='skay' />
         <div>
            ava + descrition
         </div>
      </div>
   )
};

export default ProfileInfo;