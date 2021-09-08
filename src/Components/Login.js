import React from 'react'

function Login() {
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
                   <input type="email" placeholder="enter your email"></input>
                   <label>Password</label>
                   <input type="password" placeholder="enter your password"></input>

                   <a>Forgot password?</a>
                   <button>Sign in</button>

               </form>
               <p className="register">Don't have an account ? Register Here</p>
           </div>
        </div>
    )
}

export default Login
