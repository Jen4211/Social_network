import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return(
      <section className={style.wrapp__profile}>
        <ProfileInfo />
        <MyPosts />

      </section>
   )
};


export default Profile;
