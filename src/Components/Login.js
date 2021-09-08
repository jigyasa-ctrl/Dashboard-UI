import React from "react";
import { Link } from "react-router-dom";

function Login({ signup }) {
  return (
    <div className="login">
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
          <input type="email" placeholder="Enter Your Email"></input>
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password"></input>

          <a>Forgot password?</a>
          <button><Link className="link-class" to="/dashboard">Sign in</Link></button>
        </form>
        <p className="register">Don't have an account ? <Link to="/signup"> Register Here</Link></p>
      </div>
    </div>
  );
}

export default Login;
