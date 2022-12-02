import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from './../../../redux/state';
import {updateNewPostTextActionCreator} from './../../../redux/state';


const MyPosts = (props) => {

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text));

   }

   let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} />)

   return (
      <div className={style.myPosts__wrap}>
         <h3>My posts</h3>
         <div className={style.addText}>
            <textarea onChange={onPostChange}
               ref={newPostElement}
               value={props.newPostText}></textarea>
            <button onClick={addPost}>add Post</button>
         </div>
         {postsElement}
      </div>
   )
};

export default MyPosts;