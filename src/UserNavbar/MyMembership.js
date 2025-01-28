import React from 'react'
import { Link } from 'react-router-dom'
import './MyMembership.css'
import UserHeader from '../components/UserHeader'

import { FaFileSignature } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdOutlineCardMembership } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoPerson, IoSettingsSharp } from "react-icons/io5";
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
import { faL } from '@fortawesome/free-solid-svg-icons';
import SideNav from './SideNav';
const MyMembership = () => {
   const[intro,showIntro]=useState(false)
   const [settings,showSettings]=useState(false);
   const handelSettings=()=>{
    showSettings(!settings);
   }
    const handelIntro=()=>{
      showIntro(!intro)
    }
  return (
    <div><UserHeader/>
   <MobileNavbar/>
    <div className='OMH'>

  <div className="usernav">
         <SideNav/>
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
