import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
   if(!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         <img className={style.background} src='https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg' alt='skay' />
         <div>
            <img src={props.profile.photos.small} />
            <p>{props.profile.aboutMe}</p>
            <p>{props.profile.fullName}</p>
         </div>
      </div>
   )
};

export default ProfileInfo;