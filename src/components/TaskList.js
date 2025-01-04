import React from 'react';

const TaskList = ({ tasks, onEdit }) => (
  <div>
    <h1>Task List</h1>
    {tasks.length === 0 ? (
      <p>No tasks available. Add some tasks!</p>
    ) : (
        <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => onEdit(task.id)}>Edit Task</button>
          </li>
        ))}
      </ul>
      
    )}
  </div>
);

export default TaskList;
