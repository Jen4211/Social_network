import preloader from './../../../assets/imges/load.gif';
import style from './../../Users/Users.module.css';
import React from 'react';

const Preloader = (props) => {
    return (
        <img src={preloader}
         className={style.loading}
            alt='louder' />
    )
}

export default Preloader;