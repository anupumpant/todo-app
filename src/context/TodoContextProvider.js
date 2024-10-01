import { useState } from "react";

export const todocontext = createContext();

export const TodoDispatch = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return state;
    case "ADD_TODO":
      return [...state, action.payload];
  }
};

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(TodoDispatch, [
    "todo1",
    "todo2",
    "todo3",
  ]);

  return (
    <todocontext.Provider value={{ todos, dispatch }}>
      {children}
    </todocontext.Provider>
  );
};

export default TodoContextProvider;
