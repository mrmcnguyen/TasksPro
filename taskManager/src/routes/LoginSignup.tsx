import React, { useState } from 'react'
import './LoginSignup.css'
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';

import email_icon from '../resources/email.png'
import password_icon from '../resources/password.png'
import user_icon from '../resources/person.png'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiX4fxGVlRAX5sjq2AWv2se6bkbN0wCd4",
  authDomain: "synergy-2-85ecd.firebaseapp.com",
  databaseURL: "https://synergy-2-85ecd-default-rtdb.firebaseio.com",
  projectId: "synergy-2-85ecd",
  storageBucket: "synergy-2-85ecd.appspot.com",
  messagingSenderId: "403112537429",
  appId: "1:403112537429:web:780f173beb25a6440193dc"
};

console.log("Test");

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

const LoginSignup = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [action, setAction] = useState("Log In");
    const [email, setEmail] = useState(""); // State variable for email
    const [password, setPassword] = useState(""); // State variable for password
    const [username, setUsername] = useState(""); // State variable for username

    const handleActionChange = () => {
        //Toggle between "Log In" and "Sign Up"
        setAction(prevAction => prevAction === "Log In" ? "Sign Up" : "Log In");
    };

    const handleFormSubmit = async (action) => {
        //event.preventDefault()

        try{
        // Implement your login or signup logic here based on the 'action' state
        if (action === "Log In") {
          // Handle log in
          await signInWithEmailAndPassword(auth, email, password);
          console.log("Login done");

        } else {

          // Handle sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("Sign Up successful");
        }
      }
      catch (error) {
        console.error("Authentication Error: ", error.message);
        setErrorMessage(error.message); // Set the error message state
      }
      };
return (
    <body className='screen'>
<div className="App">
<div className='header fade-in-element' style={{ animationDelay: '0.1s' }}>
<div className='text'>{action}</div>
<div className='underline'></div>
</div>
<div className='inputs fade-in-element' style={{ animationDelay: '0.1s' }}>
    {action === "Sign Up" && (
        <div className='input'>
        <img src={user_icon} alt="" />
        <input type="text" placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
    )}
<div className='input'>
<img src={email_icon} alt="" />
<input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
</div> 
<div className='input'>
<img src={password_icon} alt="" />
<input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
</div>
{errorMessage && (
  <div className="error-message fade-in-element" style={{ animationDelay: '0.1s' }}>
    {errorMessage}
  </div>
)}
</div>
{action === "Sign Up" ? <div></div>: <div className="forgot-password fade-in-element"  style={{ animationDelay: '0.1s' }}><Link to='/home'><span>Forgot Password?</span></Link></div>} 
<div className="submit-container fade-in-element" style={{animationDelay: '0.1s' }}>
<div className={action==="Log In"? "submit gray":"submit"} onClick={() => {
      setAction("Sign Up"); // Update the action
      handleFormSubmit("Sign Up"); // Call handleFormSubmit
    }}>Sign Up</div>
<div className={action==="Sign Up"?" submit gray":"submit"} onClick={() => {
      setAction("Log In"); // Update the action
      handleFormSubmit("Log In"); }}>Log In</div>
</div>
<text className='footer fade-in-element' style={{animationDelay: '0.1s' }}>Synergy 2023 ©. Powered by YMD. All Rights Reserved.</text>
</div>
</body>
)
}

export default LoginSignup