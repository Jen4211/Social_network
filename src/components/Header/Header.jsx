import React from 'react';
import style from './Header.module.css'

const Header = (props) => {
   return(
      <header className={style.header}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh-Dlq-pSaZch38gYyaOkTQrVNr6ADl6cMw&usqp=CAU' alt='cat' />
     </header>
   )
}

export default Header;