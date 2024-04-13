import {createContext} from "react";

export const StoreContext = createContext(null)

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}