import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskText !== '') {
      onAddTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <div>      
      <div className='box'>
      <form className='taskform' onSubmit={handleFormSubmit}>
        <h2 className='h2'>Add Task</h2><br />
        <input
         className='w-100  form-control'
          type="text"
          value={newTaskText}
          onChange={handleInputChange}
          placeholder="Enter task text"
        /> <br />
        <button type="submit" className='btn btn-primary w-25'>Add Task</button>
      </form>
      </div>
    </div>
  );
};

export default AddTaskForm;