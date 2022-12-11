import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

   let onAddPost = () => {
      props.addPost();
   }

   let onPostChange = (event) => {
      let text = event.target.value;
      props.updateNewPostText(text);
   }

   let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} />)

   return (
      <div className={style.myPosts__wrap}>
         <h3>My posts</h3>
         <div className={style.addText}>
            <textarea onChange={onPostChange}
            placeholder='Enter new post'
               value={props.newPostText}></textarea>
            <button onClick={onAddPost}>add Post</button>
         </div>
         {postsElement}
      </div>
   )
};

export default MyPosts;