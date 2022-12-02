import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return (
      <section className={style.wrapp__profile}>
         <ProfileInfo />
         <MyPosts
            postsData={props.profilePage.postsData}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}
             />
      </section>
   )
};


export default Profile;
