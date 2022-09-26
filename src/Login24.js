import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./style/stylelogin24.css";
import logo from "./Logo.png";
export default function Login24() {
  const navigate=useNavigate();
  function Signup(){
    navigate("/Signup")
  }
  return (
    <>
      <div className='login_outer'>

            <div className='login_outer_row1'>
                   <div className='login_outer_row1_inner'>
                          <div className='login_outer_row1_inner_row1'>
                           <img src={logo}></img>
                          <h2>Logo</h2>
                          </div>
                          <div className='login_outer_row1_inner_row2'>
                           <h1>Welcome!</h1>
                          </div>
                          <div className='login_outer_row1_inner_row3'>
                           Please signin to your account
                          </div>
                          <div className='login_outer_row1_inner_row4'>
                           <input type={'email'} placeholder="Email" ></input>
                          </div>
                          <div className='login_outer_row1_inner_row5'>
                           <input type={'password'} placeholder="password" ></input>
                          </div>
                          <div className='login_outer_row1_inner_row6'>
                           <input type={'checkbox'}></input>
                          <label>Remember Me</label>
                          <text>Forgot Password?</text>
                          </div>
                          <div className='login_outer_row1_inner_row7'>
                              <button>LOGIN</button> 
                          </div>
                     </div>
            </div>

            <div className='login_outer_row2'>
                  New member? <text onClick={Signup}>SignUp</text>
            </div>
      </div>
    </>
  );
}