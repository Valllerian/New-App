import React from "react";

const Todo = (props) => {
  // this component should display a div with the task of the todo.
  // For each todo component, there should also be a button with the "X" text that when clicked, removes the todo;
  let task = props.task;
  let deadline = props.deadline;
  return (
    <div>
      <div>Task: {task}</div>
      <div>Deadline: {deadline}</div>
    </div>
  );
};

export default Todo;
