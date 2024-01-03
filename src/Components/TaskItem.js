import React from "react";

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div>
      <div className="tasklist">
      <ul>
      <li>
      <p><span>ID:</span> {task.id}</p>
      <p><span>TODO TASK {task.id} : </span>{task.text}</p>
      <p><span>Status: </span>{task.completed ? 'Completed' : 'Not Completed'}</p>
      <button className="btn btn-warning" onClick={onToggleComplete}>
        {task.completed ? 'Mark Uncompleted' : 'Mark Completed'}
      </button>
      <button className="btn btn-danger" onClick={onDelete}>Delete</button>
    </li> 
      </ul>
      </div>
    </div>
  );
};

export default TaskItem;
   {/* <ul class="list-group">
        <li class="list-group-item">ID : {task.id}</li>
        <li class="list-group-item">Task : {task.text}</li>
        <li class="list-group-item">
          Status : {task.completed ? "Completed" : "Not Completed"}
        </li>
        <li class="list-group-item">
          Complete/Undone :{" "}
          <button className="btn btn-success" onClick={onToggleComplete}>
            {task.completed ? "Mark Undone" : "Mark Completed"}
          </button>
        </li>
        <li class="list-group-item">
          Delete :{" "}
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </li>
      </ul> */}