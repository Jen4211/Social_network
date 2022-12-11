import React from 'react';
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator, addPostActionCreator } from './../../../redux/profileReducer'
import MyPosts from './MyPosts';


// const MyPostsContainer = (props) => {
// let state = props.store.getState();

//    let addPost = () => {
//       props.store.dispatch(addPostActionCreator());
//    }

//    let onPostChange = (text) => {
//       props.store.dispatch(updateNewPostTextActionCreator(text));

//    }

//    return (<MyPosts addPost={addPost}
//       updateNewPostText={onPostChange}
//       postsData={state.profilePage.postsData}
//       newPostText={ state.profilePage.newPostText}
//       />)
// };
let mapStateToProps = (state) => {
   return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text));
   
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;