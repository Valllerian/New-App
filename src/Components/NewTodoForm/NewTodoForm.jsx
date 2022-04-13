import React, { useState } from "react";
import Todo from "../Todo/Todo";

const NewTodoForm = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  // this component should render a form with one text input for the task to be created.
  // When this form is submitted, a new Todo component should be created;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("A task was submitted: " + task.value + "\n" + "Deadline: " + deadline.value);
    setTaskArray({task:task, deadline:deadline})
    setTask("");
    setDeadline("");
    console.log(taskArray)
  };

  const handleChangeTask = (e) => {
    e.preventDefault();
    setTask({value: e.target.value})
  }

  const handleChangeDeadline = (e) => {
    e.preventDefault();
    setDeadline({value: e.target.value})
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Task:
          <input type="text" name="task" value={task.value} onChange={(e) => handleChangeTask(e)}/>
        </label>
        <label>
          Deadline:
          <input type="text" name="deadline" value={deadline.value} onChange={(e) => handleChangeDeadline(e)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {taskArray ? (taskArray.map((task)=>{<Todo task = {task.task}/>})) : null}
      </div>
    </div>
  );
};

export default NewTodoForm;
