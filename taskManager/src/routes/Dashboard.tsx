import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Task } from './Task';
import Logo from '../resources/logoICON.png'
import homeIcon from '../resources/home.png'
import profile from '../resources/pfp.png'
import settingsIcon from '../resources/settings.png'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './Dashboard.css'
import './Sidebar'

import LoginSignup from './Signup';

function Dashboard( ){
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
<img className='icon fade-in-element' style={{ animationDelay: '0.1s' }} src={Logo}></img>
<text className='logoText fade-in-element' style={{ animationDelay: '0.1s' }}>Tasks Pro.</text>
</div>
</Link>

<div className='navigation'>
    <div className='userDisplay'>
    <img className='pfp fade-in-element' style={{ animationDelay: '0.1s' }} src={profile}></img>
    </div>
    <Link to={'/home'}>

    <div className='home fade-in-element' style={{ animationDelay: '0.1s' }}>
    <img className='homeIcon fade-in-element' style={{ animationDelay: '0.1s' }} src={homeIcon}></img>
    Home</div>
    </Link>
    <Link to={'/settings'}>
    <div className='settings fade-in-element' style={{ animationDelay: '0.1s' }}>
    <img className='settingsIcon fade-in-element' style={{ animationDelay: '0.1s' }} src={settingsIcon}></img>
    Settings</div>
    </Link>
</div>
</div>
<div className='rightContainer'>
<h1 className='welcome-text fade-in-element' style={{ animationDelay: '0.1s' }}>Today's Tasks</h1>
<div className='tasks fade-in-element' style={{ animationDelay: '0.1s' }}>
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
<div className='inputs fade-in-element' style={{ animationDelay: '0.1s' }}>
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