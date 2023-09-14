import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Task } from './Task';
import Logo from '../resources/logoICON.png'
import homeIcon from '../resources/home.png'
import profile from '../resources/pfp.png'
import settingsIcon from '../resources/settings.png'
import logOut from '../resources/logOut.png'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './Settings.css'
import './Sidebar'

import LoginSignup from './Signup';

function Settings( ){

return (
<div className="container">
<div className="dashboard-container">
<Link to='/'>
    <div className='logoDiv'>
<img className='icon' style={{ animationDelay: '0.1s' }} src={Logo}></img>
<text className='logoText' style={{ animationDelay: '0.1s' }}>Tasks Pro.</text>
</div>
</Link>

<div className='navigation'>
    <div className='userDisplay'>
    <img className='pfp' style={{ animationDelay: '0.1s' }} src={profile}></img>
    </div>
    <Link to={'/home'}>
    <div className='homes' style={{ animationDelay: '0.1s'}} >
    <img className='homeIcon' style={{ animationDelay: '0.1s' }} src={homeIcon}></img>
    Home</div>
    </Link>
    <Link to={'/home/settings'}>
    <div className='setting' style={{ animationDelay: '0.1s' }}>
    <img className='settingsIcon' style={{ animationDelay: '0.1s' }} src={settingsIcon}></img>
    Settings</div>
    </Link>
    <Link to={'/'}>
    <div className='logOuts' style={{ animationDelay: '0.1s' }}>
    <img className='logOutIcons' style={{ animationDelay: '0.1s' }} src={logOut}></img>
    Log Out</div>
    </Link>
</div>
</div>
<div className='rightContainer'>
<h1 className='welcome-text fade-in-element' style={{ animationDelay: '0.1s' }}>Settings</h1>
<div className='settingsContainer fade-in-element'></div>
</div>
<p className="version-display">
Version 1.0.0
</p>
</div>
);
};

export default Settings;