import {combineReducers, legacy_createStore} from "redux"
import profileReducer from './profileReducer'
import dialogReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from "./usersReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
   usersPage: usersReducer

})
let store = legacy_createStore(reducers);

export default store;
