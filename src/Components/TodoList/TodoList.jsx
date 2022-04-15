import React from 'react'
import NewTodoForm from '../NewTodoForm/NewTodoForm'

const TodoList = () => {
    // this component should render the NewToDoForm component and should render the list of Todo components;
    // Place your state that contains all of the todos in this component;
  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-indigo-500' ><NewTodoForm/></div>
  )
}

export default TodoList

