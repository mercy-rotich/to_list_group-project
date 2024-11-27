
import React from 'react'
import ToDoList from './components/ToDoList';

import "./App.css"
function App () {
  return (
    <div className='todo-wrapper'>
      <h2>
        ToDo List
      </h2>
      <ToDoList/>
    </div>
  );
}

export default App