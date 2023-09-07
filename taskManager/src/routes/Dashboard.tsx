// TaskManager.tsx
import React, { useState } from 'react';
import { Task } from './Task';
import Logo from '../resources/logoICON.png'

function Dashboard(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({ id: 0, title: '', description: '', completed: false });

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ id: newTask.id + 1, title: '', description: '', completed: false });
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleToggleComplete = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <body>
    <div className="container">
      <img className="logo" src={Logo}></img>
      <h1 className='welcome-text'>Task Manager Dashboard</h1>
      <div className='inputs'>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={newTask.title}
          onChange={handleTaskChange}
        />
        <textarea
          name="description"
          placeholder="Task description"
          value={newTask.description}
          onChange={handleTaskChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        {tasks.map(task => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span>{task.title}</span>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
    <p className="version-display">
      Version 1.0.0
      </p>
    </body>
    
  );
};

export default Dashboard;