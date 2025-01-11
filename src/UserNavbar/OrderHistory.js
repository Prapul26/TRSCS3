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
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
const OrderHistory = () => {
  
     const[intro,showIntro]=useState(false)
      const handelIntro=()=>{
        showIntro(!intro)
      }
  return (
    <div> <UserHeader />
    <MobileNavbar/>
    <div className="OHP">
      
      <div className="usernav">
                <div className="home-container">
                <FaHome size={25} style={{marginRight:'6px'}}/> <h2>Home</h2>
                </div>
                <div className="navs">
                <Link to='/'  style={{color:"inherit",textDecoration:"none"}}> <div className="membership"><div className="a2"><MdOutlineCardMembership size={20} className="a1" style={{marginTop:"24px",paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>My Membership</h3> </div></Link>
                 <Link to='/accountSettings'   style={{color:"inherit",textDecoration:"none"}}><div className="accountSettings"><div className="a3"><IoSettingsSharp size={20}  style={{marginTop:"22px",paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>Account Settings/Profile</h3> </div></Link> 
                <Link to='/businessProfile'style={{color:"inherit",textDecoration:"none"}}><div className="businessProfile"><div className="a5"><ImProfile size={20} style={{marginTop:"22px",paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>My Business Profile</h3> </div></Link>  
                 <div className="intro1">
                  <div className="introduction" onClick={handelIntro}><h3><span style={{marginTop:'5px'}}><FaBriefcase  size={20} style={{paddingLeft:'5px',paddingRight:'5px' ,alignContent:"center",justifyContent:"center"}}/></span>Introduction</h3> {intro ?< IoIosArrowDropup size={22} style={{marginTop:"20px"}}/>:<IoIosArrowDropdown size={22} style={{marginTop:"20px"}} />}</div>
                  {
                    intro && <div className="intoNav">
                      <Link to='/contacts' style={{color:"inherit",textDecoration:"none"}}><h3>< RiContactsFill style={{marginRight:'3px',}} />Contacts</h3></Link>
                     <Link to='/inbox'  style={{color:"inherit",textDecoration:"none"}}><h3><HiInboxArrowDown style={{marginRight:'3px'}}/>Inbox</h3></Link> 
                     <Link to='/makeIntro'style={{color:"inherit",textDecoration:"none"}} > <h3><IoBookOutline style={{marginRight:'3px'}}/>Make Introduction</h3></Link>
                     <Link to='/email'style={{color:"inherit",textDecoration:"none"}} ><h3><MdOutlineEmail style={{marginRight:'3px'}} />Email Templates</h3></Link> 
                     <Link to='/signature'style={{color:"inherit",textDecoration:"none"}} ><h3><FaFileSignature style={{marginRight:'3px'}} />Signature</h3></Link> 
      
                    </div>
                  }</div>
                  <div className="logout" style={{display:"flex"}}><div className="a4"><SlLogout style={{marginTop:'23px',paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>Logout</h3> </div>
                </div>
              </div>
         
    <div className="orderHistoryPage">
     
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
