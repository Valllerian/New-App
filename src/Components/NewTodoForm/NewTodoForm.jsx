import React, { useState } from "react";
import Todo from "../Todo/Todo";

const NewTodoForm = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(task !== '' && deadline !== '')
    if (task !== "" && deadline !== "") {
      let currentTask = { task: task, deadline: deadline, visual: true };
      setTaskArray([...taskArray, currentTask]);
      setTask("");
      setDeadline("");
      alert(
        "A task was submitted: " +
          task.value +
          "\n" +
          "Deadline: " +
          deadline.value
      );
    } else {
      alert("Type in task and deadline please!");
    }
  };

  const handleChangeTask = (e) => {
    setTask({ value: e.target.value });
  };

  const handleChangeDeadline = (e) => {
    setDeadline({ value: e.target.value });
  };

  return (
    <div className="border border-gray-800 p-6 bg-[#6982d5] text-white rounded-xl shadow-2xl shadow-slate-500">
      <form className="mb-6" onSubmit={(e) => handleSubmit(e)}>
        <label className="mr-9">
          Task:
          <input
            type="text"
            name="task"
            value={task.value}
            onChange={(e) => handleChangeTask(e)}
            className="ml-1 border border-gray-800 bg-[#e5f8ea] text-black rounded-md"
          />
        </label>
        <label className="">
          Deadline:
          <input
            type="text"
            name="deadline"
            value={deadline.value}
            onChange={(e) => handleChangeDeadline(e)}
            className="ml-1 border border-gray-800 bg-[#e5f8ea] text-black rounded-md"
          />
        </label>
        <input type="submit" value="Submit" className="pl-3" />
      </form>
      <div>
        {taskArray[0]
          ? taskArray.map((task) => {
              return (
                <div key={task.deadline.value}>
                  <Todo
                    
                    task={task.task.value}
                    deadline={task.deadline.value}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default NewTodoForm;
