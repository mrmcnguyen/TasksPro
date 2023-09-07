import React, { useState } from 'react';
import { Task } from './Task';
import Logo from '../resources/logoICON.png'
import './Dashboard.css'


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

<div className="container">
<h1 className='welcome-text'>Task Manager Dashboard</h1>
<div className='inputs'>
<input
className="taskName"
type="text"
name="title"
placeholder="Task title"
value={newTask.title}
onChange={handleTaskChange}
/>
<textarea
className='taskDescription'
font-style
name="description"
placeholder="Task description"
value={newTask.description}
onChange={handleTaskChange}
/>
<button className='addTask' onClick={handleAddTask}>Add Task</button>
</div>
<div className='tasks'>
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
<p className="version-display">
Version 1.0.0
</p>
</div>

);
};


export default Dashboard;



