import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

   let postsData = [
      { id: 1, message: "Hi, how are you?", likeCount: 12 },
      { id: 2, message: "It is my first post.", likeCount: 20 },
      { id: 3, message: "What do you do?", likeCount: 10 }
   ];

   let postsElement = postsData.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} />)

   return (
      <div className={style.myPosts__wrap}>
         <h3>My posts</h3>
         <div className={style.addText}>
            <textarea ></textarea>
            <button>add Post</button>
         </div>
         {postsElement}
      </div>
   )
};

export default MyPosts;