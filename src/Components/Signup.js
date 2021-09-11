import React from "react";
import { Link } from "react-router-dom";

/* Sign up page Component */

function Signup() {
  return (
    <div className="login">
      <div className="login-side">
        <h1>Dash.</h1>
      </div>
      <div className="login-form signup">
        <h1>Create an account</h1>
        <p className="sign-in">Create an account to use dashboard</p>
        <span>
          <button>Signin with google</button>
          <button>Signin with Apple</button>
        </span>
        <form className="form">
          <div className="form-sub">
            <span className="form">
              <label>First Name</label>
              <input
                type="name"
                placeholder="First Name"
                onChange={(e) => localStorage.setItem("name", e.target.value)}
              ></input>
            </span>
            <span className="form">
              <label>Last Name</label>
              <input
                type="name"
                placeholder="Last Name"
                onChange={(e) =>
                  localStorage.setItem("lastname", e.target.value)
                }
              ></input>
            </span>
          </div>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => localStorage.setItem("email", e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => localStorage.setItem("password", e.target.value)}
          ></input>

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password"></input>

          <a>Forgot password?</a>
          <button>
            <Link className="link-class" to="/">
              Sign up
            </Link>
          </button>
        </form>
        <p className="register">
          Already have an account ? <Link to="/">Login Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
