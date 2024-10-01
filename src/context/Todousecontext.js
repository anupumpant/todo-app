import { useContext } from "react";
import todocontext from "./TodoContextProvider";

export const Todousecontext = () => {
  const context = useContext(todocontext);

  if (!context) {
    throw console.error("error");
  }

  return context;
};
