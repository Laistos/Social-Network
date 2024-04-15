import profileReducer from "./reducer/profileReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from "./reducer/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})
export let store = configureStore({
    reducer: reducers
})

window.store = store