import "./style/style.css";
import Logo from "./Logo.png";
export default function Login() {
  return (
    <>
      <div className="Login_Outer">


           <div className="Login_Outer_row1">
                    <div className="Login_Outer_row1_inner">
                         <div className="Login_Outer_row1_inner_row1">
                          <img  src={Logo}></img>
                          <label><h4>Logo</h4></label>
                         </div>
                         <div className="Login_Outer_row1_inner_row2">
                          <label><h2>Welcome!</h2></label>
                          </div>
                        <div className="Login_Outer_row1_inner_row3">
                         </div>
                           <label>please signin to your account</label>
                        <br></br>
                         <div className="Login_Outer_row1_inner_row4">
                         <input type="text" placeholder="Email"/>
                         </div>
                         <div className="Login_Outer_row1_inner_row5">
                         <input type="password" placeholder="Password"/>
                         </div>
                         <div className="Login_Outer_row1_inner_row6">
                         <input type="checkbox" />
                         <label>Remember me</label>
                         <label className="k">Forgot Password?</label>
                         </div>
                         
                         <div className="Login_Outer_row1_inner_row7">
                         <label>Login</label>
                         </div>
                   </div>
                   
           </div>

             <div className="Login_Outer_row2">
                    <div className="Login_Outer_row2_inner_row1">
                         New Member? |<span> Sign Up</span>
                   </div>
             </div>
      </div>
    </>
  );
}



