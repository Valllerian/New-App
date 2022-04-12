import React from "react";
import Todo from "../Todo/Todo";

const NewTodoForm = () => {
  // this component should render a form with one text input for the task to be created.
  // When this form is submitted, a new Todo component should be created;
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewTodoForm;
