import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  articles: [],
  loading: true,
  error: null
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getDocs = async () => {
    try {
      const response = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=xvqB3F5iOefnjGAU4L9ScF3OE7sni3TA");
      dispatch({
        type: "GET_DOCS",
        payload: response.data.response.docs
      });
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        articles: state.articles,
        loading: state.loading,
        error: state.error,
        getDocs
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
