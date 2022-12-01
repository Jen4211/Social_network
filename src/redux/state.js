import { rerenderEntireTree } from './../render';


let state = {
   dialogsPage: {
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
      newMessagesText: 'text'
   },
   profilePage: {
      postsData: [
         { id: 1, message: "Hi, how are you?", likeCount: 12 },
         { id: 2, message: "It is my first post.", likeCount: 20 },
         { id: 3, message: "What do you do?", likeCount: 10 }
      ],
      newPostText: 'text'
   }


};

export let addPost = () => {

   let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likeCount: 5
   };

   state.profilePage.postsData.push(newPost);
   rerenderEntireTree(state);
   state.profilePage.newPostText = '';
}

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export let addMessage = () => {
   let newMessage = {
      id: 4,
      message: state.dialogsPage.newMessagesText
   };
   state.dialogsPage.messagesData.push(newMessage);
   rerenderEntireTree(state);
   state.dialogsPage.newMessagesText = '';
   
}

export let updeteNewMessageText = (newText) => {
state.dialogsPage.newMessagesText = newText;
rerenderEntireTree(state);
}



export default state;