import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import AddTaskForm from "./Components/AddTaskForm";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(1);


  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (taskText) => {
    const newTask = {
      id: taskIdCounter, // Use a unique identifier (timestamp in this case)
      text: taskText,
      completed: false, // Default completed status
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskIdCounter((prevCounter) => prevCounter + 1);

  };

  return (
    <div>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
