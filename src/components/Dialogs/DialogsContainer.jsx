import React from 'react';
import { connect } from 'react-redux';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';




// const DialogsContainer = (props) => {
//       let state = props.store.getState();
//       let addMessage = () => {
//             props.store.dispatch(addMessageActionCreator());
//       };

//       let onMessageChange = (text) => {
//             props.store.dispatch(updateNewMessageTextActionCreator(text));
//       }

//       return (<Dialogs addMessage={addMessage}
//             onMessageChange={onMessageChange}
//             dialogsPage={state.dialogsPage} />);
// }

let mapStateToProps = (state) => {
      return {
            dialogsPage: state.dialogsPage
      }
}

let mapDispatchToProps = (dispatch) => {
      return {
            addMessage: () => {
                  dispatch(addMessageActionCreator());
            },
            onMessageChange: (text) => {
                  dispatch(updateNewMessageTextActionCreator(text));
            }
      }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;