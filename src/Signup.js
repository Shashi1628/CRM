import "./style/stylesignup.css";
import Logo from "./Logo.png";
import React from "react";
export default function Signin() {
  return (
    <>
      <div className="signup_outer">
        <div className="signup_outer_inner">
          <div className="signup_outer_inner_row1">
            <img src={Logo}></img>
              <h2>Logo</h2>
          </div>
          <div className="signup_outer_inner_row2">
            <h2>Welcome!👋</h2>
          </div>
          <div className="signup_outer_inner_row3">
            <label>Please signup to your account</label>
          </div>
          <div className="signup_outer_inner_row4">
          <div className="signup_outer_inner_row4_left">
            <input type="text" placeholder="FirstName" />
            </div>

            <div className="signup_outer_inner_row4_right">
            <input type="text" placeholder="LastName" />
            </div>
            </div>
            <div className="signup_outer_inner_row5">
          <input type="text" placeholder="Email" />
          </div>
          <div className="signup_outer_inner_row6">
          <input type="password" placeholder="Password" />
          </div>
          <div className="signup_outer_inner_row7">
          <input type="password" placeholder="Re-Password" />
          </div>
          <div className="signup_outer_inner_row8">
            <input type="checkbox" />
            <label>
              By clicking on Register,you agree to our<label className="t">Terms and Conditions </label>of Use</label>
          </div>
          <div className="signup_outer_inner_row9">
            <button>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}
