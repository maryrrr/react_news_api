import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'


const initialState = {
    docs: [],

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

const getDocs = async () => {
    const response = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=xvqB3F5iOefnjGAU4L9ScF3OE7sni3TA");
    dispatch({
        type: "GET_DOCS",
        payload: response.data.response.docs,
        });
    console.log(response)
        return (
            <GlobalContext.Provider
            value={{
            docs: state.docs,
            getDocs,
            }}
            >
            {children}
            </GlobalContext.Provider>
            );
    }
}