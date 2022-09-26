import React from 'react'
import {FiMoreHorizontal} from "react-icons/fi";
import {MdKeyboardArrowDown} from "react-icons/md";
import "./style/Profile.css";
import pic from "./pic.jpg"
export default function Profile() {
  return (
    <>
    <div className='outer'>
               <div className='outer_column1'>
                        <img src={pic} ></img>
                        <div className='name' >Nancy Powell  </div>
                        <div className='id' >c10001</div>
                </div>
                        <div className='outer_row1'>
                          <input type="text"  placeholder="Personal Information"  ></input>
                          <FiMoreHorizontal className='more1' />
                        </div>
                       <div className='outer_row2'>
                       <div className='f' >FirstName</div>
                       <div className='l'>Last Name</div>
                       <div className='e'>Email</div>
                       <div className='d'>Date of Birth</div>
                       
                     
                       </div>

                       <div className='outer_row3'>
                       <input  className='b1' type="text" ></input>
                       <input className='b2'  type="text" ></input>
                       <input className='b3'  type="text" ></input>
                       <input className='b4'  type="text" ></input>
                       
                       <MdKeyboardArrowDown className='v'/>
                       </div>
                       <div className='outer_row4'>
                       <div className='a4' >Address</div>
                       <div className='b4' >Password</div>
                       <div className='c4' >Confirm Password</div>
                       </div>
                       <div className='outer_row5'>
                       <input className='a5' type="text" ></input>
                       <input className='b5' type="text" ></input>
                       <input className='c5'type="text" ></input>
                       </div>
               
    </div>
    </>
  );
}