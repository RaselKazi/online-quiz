import React from "react";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  answer: [{ categories: "all", price: "", search: "" }],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = action.payload;
      return { ...state, answer: newItem };
    }
    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
