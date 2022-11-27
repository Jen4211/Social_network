import React from 'react';
import style from './Post.module.css';


const Post = (props) => {
   return (
    <div className={style.wrap__post}>
      <img src='https://i.etsystatic.com/16080595/r/il/d3dd03/2600962297/il_570xN.2600962297_arhj.jpg' alt='cat' />
     { props.message }
      <p>like { " " + props.likeCount}</p>
    </div>
   )
};

export default Post;