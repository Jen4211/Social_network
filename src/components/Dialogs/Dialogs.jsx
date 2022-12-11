import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';





const Dialogs = (props) => {
   let dialogsElement = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} src={d.src} />);

   let messagesElement = props.dialogsPage.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id} />);


   let onAddMessage = () => {
      props.addMessage();
   };

   let onMessageChange = (event) => {
      let text = event.target.value;
      props.onMessageChange(text);
   }

   return (
      <div className={style.dialogs__wrap}>
         <div className={style.dialogs__list}>
            {dialogsElement}
         </div>
         <div className={style.messages__list}>
            {messagesElement}
            <div className={style.add__text}>
               <textarea
                  placeholder='Enter your message'
                  onChange={onMessageChange}
                  value={props.dialogsPage.newMessagesText}></textarea>
               <button onClick={onAddMessage}>Add message</button>
            </div>
         </div>

      </div>

   );
}

export default Dialogs;