import React from 'react'
import { Link } from 'react-router-dom'
import './MyMembership.css'
import UserHeader from '../components/UserHeader'

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
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';
const MyMembership = () => {
   const[intro,showIntro]=useState(false)
    const handelIntro=()=>{
      showIntro(!intro)
    }
  return (
    <div><UserHeader/>
   <MobileNavbar/>
    <div className='OMH'>

  <div className="usernav">
          <Link to='/home' style={{color:"inherit",textDecoration:"none"}}><div className="home-container">
          <FaHome size={25} style={{marginRight:'6px'}}/> <h2>Home</h2>
          </div></Link> 
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
   
    <div className='fz2'>
      
      <div className='myMembership-button'>
       <Link to='/orderHistory'style={{color:"inherit",textDecoration:"none"}}><button>Order History</button></Link> 
      </div>
      <div className='myMembership-container' >
<div className='membershipH1'><h1>Current Active Package</h1></div>
<div className='memtable' >
   <div className='t1'>
    <div className='m1t1'><p>Package Name</p></div>
    <div className='m1t2'><p>Price</p></div>
    <div className='m1t3'><p>Purchase Date</p></div>
    <div className='m1t4'><p>Extire Date</p></div>
   </div>
   <div className='t2'>
    <div className='m2t1'><p>Standard</p></div>
    <div className='m2t2'><p>$120</p></div>
    <div className='m2t3'><p>07 july,2024</p></div>
    <div className='m2t4'><p>07 july,2025</p></div>
   </div>
</div>
      </div>
    </div> </div>
    </div>
  )
}

export default MyMembership
