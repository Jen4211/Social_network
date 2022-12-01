import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
   let dialogsElement = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} src={d.src} />);

   let messagesElement = props.dialogsPage.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id} />);

   let newMessageElement = React.createRef();

   let addMessage = () => {
      props.addMessage();
   };

   let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.updeteNewMessageText(text);
   }

   return (
      <div className={style.dialogs__wrap}>
         <div className={style.dialogs__list}>
            {dialogsElement}
         </div>
         <div className={style.messages__list}>
            {messagesElement}
            <div className={style.add__text}>
               <textarea ref={newMessageElement}
               onChange={onMessageChange}
               value={props.dialogsPage.newMessagesText}></textarea>
               <button onClick={addMessage}>Add message</button>
            </div>
         </div>

      </div>

   );
}

export default Dialogs;