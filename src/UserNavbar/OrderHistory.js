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
      <div className="c-header">
        <div className="c-h1">
          <h3>Order History</h3>
        </div>
        <div className="c-h2">
          <p>Home</p>
          <span>.</span>
          <p>Dashboard</p>
          <span>.</span>
          <p>Orders</p>
        </div>
      </div>
      <div className="orderBackButton"><Link to='/' style={{textDecoration:"none",color:"inherit"}}><button>Back</button></Link></div>
      <div className="orderHistoryTable">
        <table>
            <thead>
                <tr>
                    <td>Package</td>
                    <td>Purchase Date</td>
                    <td>Expired Date</td>
                    <td>Price</td>
                    <td>Payment Method</td>
                    <td>Transaction Id</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Standard<span style={{background:"green",color:"white",paddingLeft:"8px",paddingRight:"8px",borderRadius:"5px",paddingBottom:'3px',marginLeft:"2px"}}>Currently Active</span></td>
                    <td>2024-07-07</td>
                    <td>2025-07-07</td>
                    <td>$100</td>
                    <td></td>
                    <td></td>
                    <td className="rgb" style={{justifyContent:"center",alignItems:"center"}}><Link to='/orderStatus'style={{textDecoration:"none",color:"inherit"}}><button className="rgb" style={{backgroundColor:"green"}}><IoMdEye /></button></Link></td>
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
