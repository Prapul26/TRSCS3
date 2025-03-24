import React from "react";
import "./OrderHistory.css";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

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
import { IoPerson } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
const OrderHistory = () => {
  
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
   
    <div className="OHP">
      
   <div className="usernav">
                      <SideNav/>
                     </div>
    <div className="orderHistoryPage">
      <MobileNavbar/>
      <div style={{marginLeft:"20px",marginTop:"20px"}}><h2>History Details</h2></div>
      <div className="orderBackButton"><Link to='/myMembership' style={{textDecoration:"none",color:"inherit"}}><button>Back</button></Link></div>
      <div className="orderHistoryTable">
        <table>
           
            <tbody>
                <tr>
                    <td>Package Name</td>
                    <td>BaSIC</td>
                </tr>
                <tr>
                  <td>Transition Id</td>
                  <td>txn_3Qx49xF56Pb8BOOX1vXc6r3o</td>
                </tr>
                <tr>
                  <td>Package Price</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td>Payment Method</td>
                  <td>Stripe</td>
                </tr>
                <tr>
                  <td>Payment Status</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>Package Start Date</td>
                  <td>27 February, 2025</td>
                </tr>
                <tr>
                  <td>Package End Date</td>
                  <td>13 March, 2025</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default OrderHistory;
