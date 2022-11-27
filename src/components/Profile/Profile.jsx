import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';


const Profile = (props) => {
   return(
      <section className={style.wrapp__profile}>
        <img className={style.background} src='https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg' alt='skay' />
        <div>
          ava + descrition
        </div>
        <MyPosts />

      </section>
   )
};


export default Profile;
