import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Task } from './Task';
import Logo from '../resources/logoICON.png'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './Dashboard.css'
import './Sidebar'

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
<div className="dashboard-container">
<Link to='/'>
    <div className='logoDiv'>
<img className="icon" src={Logo}></img>
<text className='logoText'>Tasks Pro.</text>
</div>
</Link>
</div>
<div className='rightContainer'>
<h1 className='welcome-text'>Today's Tasks</h1>
<div className='tasks'>
{tasks.map(task => (
<div className='taskEntry' key={task.id}>
<input className='checkBox'
type="checkbox"
checked={task.completed}
onChange={() => handleToggleComplete(task.id)}
/>
<span className='taskId'>{task.title}</span>
<button className='deleteTask'>Delete</button>
</div>
))}
</div>
<div className='inputs'>
<input
className="taskName"
type="text"
name="title"
placeholder="Task title"
value={newTask.title}
onChange={handleTaskChange}
/>
<button className='addTask' onClick={handleAddTask}>Add Task</button>
</div>
<p className="version-display">
Version 1.0.0
</p>
</div>
</div>






);
};




export default Dashboard;