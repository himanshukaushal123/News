//context creation
//provider
//useEffect
import React, { useReducer, useEffect } from "react";
import { useContext } from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initalState = {
  isLoadind: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

//to create a provider function
const AppProvider = ({ children }) => {
  //fetching work
  const [state, dispatch] = useReducer(reducer, initalState);
  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removepost = (objectID) => {
    dispatch({
      type: "REMOVE_POST",
      payload: objectID,
    });
  };
  const searchpost = (value) => {
    dispatch({
      type: "SEARCH",
      payload: value,
    });
  };
  //page load on 1st time
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query]);

  return (
    <AppContext.Provider value={{ ...state, removepost, searchpost }}>
      {children}
    </AppContext.Provider>
  );
};
//create custom hook
const useGlobalhook = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalhook };
