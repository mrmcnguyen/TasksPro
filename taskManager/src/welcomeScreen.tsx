import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './welcomeScreen.css'
import tasksLogo from './resources/logo.png'

function App() {

  return (
    <div className="App">
      <div>
          <img src={tasksLogo} className="logo" alt="Tasks logo" />
      </div>
      <h1>Welcome to Tasks Pro.</h1>
      <div className="card">
        <button className="get-started-button">
          Get Started.
        </button>

      </div>
      <p className="company-name-display">
      Tasks Pro. 2023 ©. Powered by YMD. All rights reserved.
      </p>
    </div>
  )
}

export default App
