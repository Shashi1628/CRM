import "./style/stylea.css";
import {AiOutlineMenu,AiOutlineSearch,AiFillStar,AiFillCompass,} from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsThreeDots, BsMessenger, BsThreeDotsVertical } from "react-icons/bs";
import React from 'react'


  export default function AdminDashboard() {
    return (
      <>
        <div className="topbar">
          <div className="topbar_col1">
            <div className="topbar_col1_circle">
              <AiOutlineMenu className="topbar_col1_circle_icon" />
            </div>
            <label>Company</label>
          </div>
          <div className="topbar_col2">
            <ul>
              <li>Dashboard</li>
              <li>Leads</li>
              <li>Campaign</li>
              <li>Prospects</li>
              <li>Account</li>
              <li><BsThreeDots/></li>
            </ul>
          </div>
          <div className="topbar_col3">
            <AiOutlineSearch />
            <input type={"text"} placeholder="Search something..." />
            <MdOutlineArrowForwardIos />
          </div>
          <div className="topbar_col4">
            <label>Clayton</label>
          </div>
        </div>
   
        <div className="contentpart">
          <div className="contentpart_leftbar">
            <div className="contentpart_leftbar_circle">
              <AiFillCompass />
            </div>
            <div className="contentpart_leftbar_circle">
              <AiFillStar />
            </div>
            <div className="contentpart_leftbar_circle">
              <BsMessenger />
            </div>
          </div>
          <div className="contentpart_contentarea"></div>
          <div className="contentpart_list">
            <div className="contentpart_list_title">
              <label>User List</label>
              <BsThreeDotsVertical />
            </div>
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
            <SingleRow />
          </div>
        </div>
      </>
    );
  }
   
  function SingleRow() {
    return (
      <div className="contentpart_list_singlerow">
        <div className="contentpart_list_singlerow_circle">
          <AiFillStar />
        </div>
        <label>Larry Claton</label>
        <button>Pending</button>
      </div>
    );
  }
  
  



















































