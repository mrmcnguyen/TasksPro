import React, { useState } from 'react'
import './LoginSignup.css'
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const goToDashboard = () => navigate('/home');
  const [email, setEmail] = useState(""); // State variable for email
  const [password, setPassword] = useState(""); // State variable for password
  const [username, setUsername] = useState(""); // State variable for username

    const handleFormSubmit = async () => {
        //event.preventDefault()

        try{
          setIsLoading(true);
          await signInWithEmailAndPassword(auth, email, password);
          console.log("Log In successful");
          goToDashboard();
        }
      catch (error) {
        console.error(error.message);
        setErrorMessage("An error occured while trying to log in."); // Set the error message state
      } finally {
        setIsLoading(false);
      }
      };
return (
    <body className='screen'>
<div className="App">
<div className='header fade-in-element' style={{ animationDelay: '0.1s' }}>
<div className='text'>Log In</div>
<div className='underline'></div>
</div>
<div className='inputs fade-in-element' style={{ animationDelay: '0.1s' }}>
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
<div className="forgot-password fade-in-element"  style={{ animationDelay: '0.1s' }}><Link to='/home'><span>Forgot Password?</span></Link></div>
<div className="submit-container fade-in-element" style={{animationDelay: '0.1s' }}>
{isLoading ? (
            <div className="spinner"><div></div><div></div><div></div><div></div></div>
          ) : (
            // Render the button when isLoading is false
            <button className="submit" onClick={handleFormSubmit}>
              Log In
            </button>
          )}

<Link to='/home/signup'>Don't have an account? Sign up</Link>
</div>
<text className='footer fade-in-element' style={{animationDelay: '0.1s' }}>Tasks Pro 2023 ©. Powered by YMD Group. All Rights Reserved.</text>
</div>
</body>
)
}


export default Signup;