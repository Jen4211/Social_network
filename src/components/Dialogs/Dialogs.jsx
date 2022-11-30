import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

   let dialogsData = [
      { id: 1, name: "Sveta" },
      { id: 2, name: "Hleb" },
      { id: 3, name: "Jenia" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Vova" },
      { id: 666, name: "Dunik Chert" }
   ];

   let messagesData = [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your curse?" },
      { id: 3, message: "Yo" }
   ];

   return (
      <div className={style.dialogs__wrap}>
         <div className={style.dialogs__list}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
         </div>
         <div className={style.messages__list}>
            <Message message={messagesData[0].message} id={messagesData[0].id} />
            <Message message={messagesData[1].message} id={messagesData[1].id} />
         </div>
      </div>

   );
}

export default Dialogs;