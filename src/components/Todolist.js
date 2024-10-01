import React from "react";
import Todocard from "./Todocard";
import { Todousecontext } from "../context/Todousecontext";

const Todolist = () => {
  const { todos, dispatch } = Todousecontext();
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todocard key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default Todolist;
