import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './welcomeScreen.css'
import tasksLogo from '../resources/logo.png'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Outlet } from "react-router-dom";

function App() {


return (
<body className='screen'>
<div className="App">
<div className='circle'></div>
<div>
<img src={tasksLogo} className="logo" alt="Tasks logo"/>
</div>
<h1>Welcome to Tasks Pro.</h1>
<div className="card">

<Link to='/home/login'>
<button className="login-button">
Log In 
</button>
</Link>

<Link to='/home/signup'>
<button className="signup-button">
Sign Up
</button>
</Link>



</div>


<p className="company-name-display">
Tasks Pro. 2023 ©. Powered by YMD. All rights reserved.
</p>
</div>
</body>
)
}




export default App











