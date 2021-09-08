import React, {useState} from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Login({ signup }) {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [color, setColor] = useState('')
    const [display, setDisplay] = useState('')


    function signIn(e) {
        e.preventDefault()
        if(email === localStorage.getItem('email') && password === localStorage.getItem('password')){
           
            setMessage('Login Successful.')
            setColor('rgb(52, 194, 52)')
            setDisplay('visible')
            const key = setTimeout(() => {
                setDisplay('none')
                window.location.pathname = "/dashboard"
                clearTimeout(key)
            }, 2000);
        }
        else{
            setMessage('Please enter valid credentials')
            setColor('rgb(175, 29, 29)')
            setDisplay('visible')
            const key = setTimeout(() => {
                setDisplay('none')
                clearTimeout(key)
            }, 2000);
        }
    }
  return (
    <div className="login">
        <Loader message={message} color={color} display={display}/>
      <div className="login-side">
        <h1>Dash.</h1>
      </div>
      <div className="login-form">
        <h1>Sign In</h1>
        <p className="sign-in">Sign in to your account</p>
        <span>
          <button>Signin with google</button>
          <button>Signin with Apple</button>
        </span>
        <form className="form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter Your Email" onChange={(e) =>setEmail(e.target.value)}></input>
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password" onChange={(e) =>setPassword(e.target.value)}></input>

          <a>Forgot password?</a>
          <button onClick={signIn}>Sign in</button>
        </form>
        <p className="register">Don't have an account ? <Link to="/signup"> Register Here</Link></p>
      </div>
    </div>
  );
}

export default Login;
