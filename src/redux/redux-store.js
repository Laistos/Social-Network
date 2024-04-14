import profileReducer from "./reducer/profileReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
})
export let store = configureStore({
    reducer: reducers
})

window.store = store