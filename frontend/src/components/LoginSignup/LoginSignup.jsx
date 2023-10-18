import React from 'react'
import './LoginSignup.css'

import logo from "../../common/assets/images/logo/MINDHAZE1200X400.png"
import { Link } from "react-router-dom"

const LoginSignup = () => {
  return (
    <div className="HeaderForLogin">
    <Link to="/">
              <div className="logoLogin width">
                  <img src={logo} alt='' />
              </div>
    </Link>
    <div className = 'containerLogin'>
        <div className = 'headerLogin'>
            <div className="textLogin">Sign Up</div>
            <div className="underline1"></div>
        </div>
        <div className="inputsLogin">
            <div className="inputLogin">
                <i className="fa fa-user"></i>
                <input type="text" className="Fname" placeholder ='First Name' />
            </div>

            <div className="inputLogin">
                <i className="fa fa-user"></i>    
                <input type="text" className="Lname" placeholder ='Last Name'/>
            </div>

            <div className="inputLogin">
                <i className="fa fa-envelope" ></i>
                <input type="text" className="email" placeholder ='Email' />
            </div>

            <div className="inputLogin">
                <i className="fa fa-lock"></i>
                <input type="text" className="password" placeholder ='Password' />
            </div>
            <div className="forgot-password">Forgot Password?</div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default LoginSignup
