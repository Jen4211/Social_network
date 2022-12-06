import {combineReducers, legacy_createStore as createStore} from "redux"; 
import dialogsReduser from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sedbarReducer from "./sedbarReduser";

let reducers = combineReducers({
    dialogsPage: dialogsReduser,
    profilePage: profileReducer,
    sedbar: sedbarReducer
})

let store = createStore(reducers);

export default store;