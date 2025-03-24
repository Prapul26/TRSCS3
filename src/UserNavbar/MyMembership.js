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
  
    <div className='OMH'>

  <div className="usernav">
         <SideNav/>
        </div>
   
    <div className='fz2'>
    <MobileNavbar/>
    <div className="d-header" >
            <h2>Order History</h2>
            
          </div>
     
     <div className='table-container'>
     <table >
          <thead>
<td>Package</td>
<td>Purchase Date</td>
<td>Expired Date</td>
<td>Price</td>
<td>Payment Date</td>
<td>Status</td>
          </thead>
          <tbody>
<tr>
  <td>Basic</td>
  <td>2025-02-27</td>
  <td>2025-03013</td>
  <td>$80</td>
  <td>Stripe</td>
  <td><button>Invoice</button><Link to="/orderHistory"><button>History Details</button></Link></td>
</tr>
<tr>
  <td>Standard</td>
  <td>2024-07-07</td>
  <td>2025-07-07</td>
  <td>$100</td>
  <td></td>
  <td><button>Invoice</button><Link to="/orderHistory"><button>History Details</button></Link></td>
</tr>
          </tbody>
          </table> 

     </div>
    </div> </div>
    </div>
  )
}

export default MyMembership
