const updateNewMessageText = 'UPDETE-NEW-MESSAGE-TEXT';
const addMessage = 'ADD-MESSAGE';

let initislState = {
   dialogsData: [
      { id: 1, name: "Sveta", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluPx_DuSBlBcDdCoeZ0MobveyKzKuJkQo0g&usqp=CAU' },
      { id: 2, name: "Hleb", src: 'https://i.etsystatic.com/16440068/r/il/4de511/2083867901/il_570xN.2083867901_5cka.jpg' },
      { id: 3, name: "Jenia", src: 'https://i.etsystatic.com/16080595/r/il/d3dd03/2600962297/il_570xN.2600962297_arhj.jpg' },
      { id: 4, name: "Sasha", src: 'https://i.etsystatic.com/16080595/r/il/46cf92/2553307948/il_340x270.2553307948_pd3q.jpg' },
      { id: 5, name: "Vova", src: 'https://i.etsystatic.com/26471798/r/il/87c13f/3361405348/il_340x270.3361405348_oa3k.jpg' },
      { id: 666, name: "Dunik Chert", src: 'https://svgsilh.com/png-1024/1296034.png' }
   ],
   messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your curse?" },
      { id: 3, message: "Yo" }
   ],
   newMessagesText: ''
}


const dialogsReduser = (state = initislState, action) => {
   switch (action.type) {
      case addMessage:
         let newMessage = {
            id: 4,
            message: state.newMessagesText
         };
         return {
            ...state,
            messagesData: [...state.messagesData, newMessage],
            newMessagesText: ''
         }
      case updateNewMessageText:
         return {
            ...state,
            newMessagesText: action.newText
         } 
      default:
         return state;
   }
};



export const addMessageActionCreator = () => {
   return {
      type: addMessage
   }
};
export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: updateNewMessageText,
      newText: text
   }
};

export default dialogsReduser;
