import profileReducer from "./reducer/profileReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import {configureStore} from "@reduxjs/toolkit";

export let store = configureStore({
    reducer: {
        profileReducer: profileReducer,
        dialogsReducer: dialogsReducer,
    }
})