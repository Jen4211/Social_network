import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

   let postsData = [
      { id: 1, message: "Hi, how are you?", likeCount: 12 },
      { id: 2, message: "It is my first post.", likeCount: 20 },
      { id: 3, message: "What do you do?", likeCount: 10 }
   ]

   return (
      <div className={style.myPosts__wrap}>
         <h3>My posts</h3>
         <div className={style.addText}>
            <textarea ></textarea>
            <button>add Post</button>
         </div>
         <Post message={postsData[0].message}
            likeCount={postsData[0].likeCount}
            id={postsData[0].id} />
         <Post message={postsData[1].message}
            likeCount={postsData[1].likeCount}
            id={postsData[1].id} />
      </div>
   )
};

export default MyPosts;