import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }
    if (!description.trim()) {
      setError('Description cannot be empty');
      return;
    }

    onSubmit({
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title: title.trim(),
      description: description.trim(),
      status: taskToEdit ? taskToEdit.status : 'Pending',
    });

    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError(''); 
        }}
      />
      
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setError(''); 
        }}
      />
      
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
