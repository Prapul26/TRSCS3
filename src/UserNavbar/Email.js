import React from "react";
import "./Email.css";
import UserHeader from "../components/UserHeader";
import { FaFileSignature } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdOutlineCardMembership } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
const Email = () => {
    const[intro,showIntro]=useState(false)
    const [settings,showSettings]=useState(false);
       const handelSettings=()=>{
        showSettings(!settings);
       }
    const handelIntro=()=>{
      showIntro(!intro)
    }
  return (
    <div> <UserHeader />
    <MobileNavbar/>
<div className="EMPPP">
  <div className="usernav">
                   <SideNav/>
                   </div>
    <div  className="EMPP">
     
      <div className="c-header">
        <div className="c-h1">
          <h3>Template</h3>
        </div>
        <div className="c-h2">
         <Link to='/home'><p>Home</p></Link> 
          <span>.</span>
        <Link to='/myMembership'> <p>Dashboard</p></Link> 
          <span>.</span>
        <Link to='/email'> <p>template</p></Link> 
        </div>
      </div>
      <div className="addTemplateButton">
        <button style={{ background: "green" }}> Add Template</button>
      </div>
      <div className="Email-container">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Subject</td>
              <td>Body</td>
              <td>Created On</td>
              <td>Action</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Inroduction email template testing</p>
              </td>
              <td>
                <p>New Email template testing</p>
              </td>
              <td>
                <p>hi Hello</p>
                <p>........</p>
              </td>
              <td>
                <p>2024-11-28</p>
              </td>
              <td>
                <button style={{ backgroundColor: "green" }}>Edit</button>
                <button style={{ backgroundColor: "red" }}>Delete</button>
              </td>
              <td>
                <button>Active</button>
              </td>
            </tr>
            <tr>
              <td>
                <p>Inroduction email template testing</p>
              </td>
              <td>
                <p>New Email template testing</p>
              </td>
              <td>
                <p>hi Hello</p>
                <p>........</p>
              </td>
              <td>
                <p>2024-11-28</p>
              </td>
              <td>
                <button style={{ backgroundColor: "green" }}>Edit</button>
                <button style={{ backgroundColor: "red" }}>Delete</button>
              </td>
              
              <td>
                <button>Active</button>
              </td>
            </tr>
            <tr>
              <td>
                <p>Inroduction email template testing</p>
              </td>
              <td>
                <p>New Email template testing</p>
              </td>
              <td>
                <p>hi Hello</p>
                <p>........</p>
              </td>
              <td>
                <p>2024-11-28</p>
              </td>
              <td>
                <button style={{ backgroundColor: "green" }}>Edit</button>
                <button style={{ backgroundColor: "red" }}>Delete</button>
              </td>
              <td>
                <button>Active</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div></div></div>
  );
};

export default Email;
