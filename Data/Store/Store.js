import React from "react";
import { createContext, useReducer } from "react";

export const Store = createContext();

if (typeof window !== "undefined") {
  // Perform localStorage action
  const item = localStorage.getItem("key");
}

const initialState = {
  answer:
    typeof window !== "undefined" && localStorage.getItem("answerItems")
      ? JSON.parse(localStorage.getItem("answerItems"))
      : [],
  currantQuestionId:
    typeof window !== "undefined" && localStorage.getItem("QuestionId")
      ? JSON.parse(localStorage.getItem("QuestionId"))
      : 1,

  userInfo:
    typeof window !== "undefined" && localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
  theme:
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "dark",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ANSWER_ITEM": {
      const newItem = action.payload;
      const existItem = state.answer.find((item) => item.id === newItem.id);
      const answer = existItem
        ? state.answer.map((item) =>
            item.id === existItem.id ? newItem : item
          )
        : [...state.answer, newItem];

      localStorage.setItem("answerItems", JSON.stringify(answer));
      return { ...state, answer };
    }

    case "RESET_QUIZ": {
      return {
        ...state,
        currantQuestionId:1,
        answer: [],
      };
    }

    case "UPDATE_QUESTION_ID": {
      const currantId = action.payload;
      localStorage.setItem("QuestionId", JSON.stringify(currantId));
      return { ...state, currantQuestionId: currantId };
    }
    case "UPDATE_THEME": {
      const theme = action.payload;
      localStorage.setItem("theme", theme);
      return { ...state, theme };
    }
    case "USER_LOGIN": {
      const newUser = action.payload;
      localStorage.setItem("user", JSON.stringify(newUser));
      return { ...state, userInfo: newUser };
    }
    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
