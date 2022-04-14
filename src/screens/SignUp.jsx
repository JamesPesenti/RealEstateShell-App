import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import {ReactComponent as ArrowRightIcon} 
from "../assets/svg/keyboardArrowRightIcon.svg"

import visibilityIcon from "../assets/svg/visibilityIcon.svg"

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const {name, email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }


  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Sign Up</p>
        </header>

       
        
          <form>
            <input 
              type="name" 
              className="nameInput" 
              placeholder="Name" 
              id="name"
              value={name}
              onChange={onChange}
            />

            <input 
              type="email" 
              className="emailInput" 
              placeholder="Email" 
              id="email"
              value={email}
              onChange={onChange}
            />

            <div className="passwordInputDiv">
              <input 
                type={showPassword ? "text" : "password"} 
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />
                <img 
                  src={visibilityIcon} 
                  alt="show password" 
                  className="showPassword"
                  onClick={() => setShowPassword((prevState) => 
                  !prevState)}
                />
            </div>

                <Link to="/forgot-password" className="forgotPasswordLink">
                  Forgot Password
                </Link>

{/* Sign in bar with enter button */}
            <div className="signUpBar">
                  <p className="signUpText">Sign In</p>
                  <button className="signUpButton">
                    <ArrowRightIcon fill="white" width="34px" height="34px"/>
                  </button>
            </div>
            <Link to="/sign-in" className="registerLink">
                Sign In Instead
            </Link>
          </form>
            
{/* Google OAuth */}
            <Link to="/sign-in" className="registerLink">
                Sign In Instead
            </Link>
      </div>
    </>
  )
}

export default SignIn