
import React from 'react'
import "./style/Prospectprogress.css";
import {AiOutlineMore} from "react-icons/ai";
import circle from "./circle.png";
export default function Login() {
  return (
    <>
    <div className='outer'>
          <div className='outer_inner'>
          <div className='outer_inner_row1'>
          <label>Prospect Progress</label>
          <AiOutlineMore className='more'/>
           </div>
   
           <div className='outer_inner_row2'>
           <img src={circle} ></img>
           </div>
           </div>
    </div>
    </>
  );
}