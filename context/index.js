import React, {useState, createContext} from "react";

export const Context = createContext();

export const ContextProvider = (props) =>{
    const [userName, setUsername] = useState("");
    const [secret, setSecret] = useState("");


    const value = {
        userName,
        setUsername,
        secret,
        setSecret,
    };


    return <Context.Provider value={value}>{props.children}</Context.Provider>
}