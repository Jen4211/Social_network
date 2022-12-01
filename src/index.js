import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: "Sveta", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluPx_DuSBlBcDdCoeZ0MobveyKzKuJkQo0g&usqp=CAU' },
  { id: 2, name: "Hleb", src: 'https://i.etsystatic.com/16440068/r/il/4de511/2083867901/il_570xN.2083867901_5cka.jpg' },
  { id: 3, name: "Jenia", src: 'https://i.etsystatic.com/16080595/r/il/d3dd03/2600962297/il_570xN.2600962297_arhj.jpg' },
  { id: 4, name: "Sasha", src: 'https://i.etsystatic.com/16080595/r/il/46cf92/2553307948/il_340x270.2553307948_pd3q.jpg' },
  { id: 5, name: "Vova", src: 'https://i.etsystatic.com/26471798/r/il/87c13f/3361405348/il_340x270.3361405348_oa3k.jpg' },
  { id: 666, name: "Dunik Chert", src: 'https://svgsilh.com/png-1024/1296034.png' }
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is your curse?" },
  { id: 3, message: "Yo" }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
