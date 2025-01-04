import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const HomePage = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
