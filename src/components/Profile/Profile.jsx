import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return (
      <section className={style.wrapp__profile}>
         <ProfileInfo profile={props.profile}/>
         <MyPostsContainer store={props.store} />
      </section>
   )
};


export default Profile;
