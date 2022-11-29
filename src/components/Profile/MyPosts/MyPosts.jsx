import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
   return (
      <div>
         <h3>My posts</h3>
         <div className={style.addText}>
            <textarea ></textarea>
            <button>add Post</button>
         </div>
         <Post message='Hi, how are you?' likeCount='12' />
         <Post message='It is my first post.' likeCount='20' />
         <Post message='What do you do?' likeCount='10' />
      </div>
   )
};

export default MyPosts;