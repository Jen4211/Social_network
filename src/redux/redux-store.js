import {combineReducers, legacy_createStore as createStore} from "redux"; 
import dialogsReduser from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sedbarReducer from "./sedbarReduser";
import usersReducer from "./userReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReduser,
    profilePage: profileReducer,
    sedbar: sedbarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;