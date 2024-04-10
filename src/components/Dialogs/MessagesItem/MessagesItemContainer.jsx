import React from 'react'
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/reducer/dialogsReducer";
import {MessagesItem} from "./MessagesItem";

export const MessagesItemContainer = (props) => {
    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageActionCreator(text))
    }

    return (
        <MessagesItem addMessage={addMessage}
                      onMessageChange={onMessageChange}
                      message={props.message}
                      newMessageText={state.dialogsReducer.newMessageText}/>
    )
}