import React, { useState } from "react";

const Todo = (props) => {
  // this component should display a div with the task of the todo.
  // For each todo component, there should also be a button with the "X" text that when clicked, removes the todo;
  let task = props.task;
  let deadline = props.deadline;
  const [visual, setVisual] = useState(true);
  const deleteTask = (e) => {
    e.preventDefault();
    setVisual(false);
  };
  return (
    <div className={visual ? "true" : "hidden"}>
      <div>Task: {task}</div>
      <div>Deadline: {deadline} + </div>
      <button onClick={(e) => deleteTask(e)}>X</button>
    </div>
  );
};

export default Todo;
