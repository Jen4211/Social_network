import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
   let dialogsElement = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} src={d.src} />);

   let messagesElement = props.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id} />);

   return (
      <div className={style.dialogs__wrap}>
         <div className={style.dialogs__list}>
            {dialogsElement}
         </div>
         <div className={style.messages__list}>
            {messagesElement}
         </div>
      </div>

   );
}

export default Dialogs;