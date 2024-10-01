import React, { useState } from "react";
import { Todousecontext } from "../context/Todousecontext";

const Todoinput = () => {
  const { todos, dispatch } = Todousecontext();
  const [todoitem, settodoitem] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo item"
        onChange={(e) => {
          settodoitem(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: todoitem });
        }}
      >
        +
      </button>
    </div>
  );
};

export default Todoinput;
