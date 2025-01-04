import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useParams } from 'react-router-dom';

const EditTaskPage = () => {
  const { tasks, editTask } = useContext(TaskContext);
  const { id } = useParams();
  const taskToEdit = tasks.find(task => task.id === Number(id));

  const [status, setStatus] = useState(taskToEdit?.status || 'Pending');

  const handleUpdate = () => {
    editTask({ ...taskToEdit, status });
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleUpdate}>Update Task</button>
    </div>
  );
};

export default EditTaskPage;
