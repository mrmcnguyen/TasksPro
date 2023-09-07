import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './welcomeScreen.css'
import tasksLogo from '../resources/logo.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <div className='circle'></div>
      <div>
          <img src={tasksLogo} className="logo" alt="Tasks logo" />
      </div>
      <h1>Welcome to Tasks Pro.</h1>
      <div className="card">
        <Link to="/home">
        <button className="get-started-button">
          Get Started
        </button>
        </Link>

      </div>
      <p className="company-name-display">
      Tasks Pro. 2023 ©. Powered by YMD. All rights reserved.
      </p>
    </div>
  )
}

export default App
