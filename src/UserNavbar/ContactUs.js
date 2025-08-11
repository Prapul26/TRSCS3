import React, { useEffect } from 'react'
import "./ContactUs.css"
import UserHeader from "../components/UserHeader";

import { ImCross, ImProfile } from "react-icons/im";
import { IoIosArrowDropdown, IoIosInformationCircle } from "react-icons/io";

import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
const ContactUs = () => {
   const [intro, showIntro] = useState(false);
  const [settings,showSettings]=useState(false);
   const [showSidebar, setShowSidebar] = useState(false);
  const [data,setData]=useState("")
  const [msg,setMsg]=useState("")
      const [showpage, setShowPage] = useState(false);
  
     const showMobnav = () => {
       setShowSidebar(prev => !prev);
   
     };
    
  
const handleSave=async(e)=>{
  e.preventDefault();
   
}


  return (
    <div>
  
    <div className='mobMenuaa'>
    <div className='mobMenu33'>
    {showSidebar && (<MobileMenu />)}
    </div>
    <div>
      <UserHeader />
      
      <div className="SPPP">
       <div className="usernav">
                     <SideNav/>
                        </div>
        <div className="SPP"><MobileNavbar showMobnav={showMobnav}/>
        <div className="d-header">
      <h2> Contact Us</h2>
        
      </div>
          <div className="signature-holder">
           
            <form onSubmit={handleSave}> 
              <label>
                Email
              </label>
              <br />
              <div className='emailContainer'><p>wd</p></div>
              <br/>
              <label>Message</label>
              <br/>
              <textarea className='rrtext'/>
             <div> <button type="submit">SAVE</button></div>
            </form><div style={{textAlign:"center"}}>{msg}</div>
          </div>
          
        </div>
      </div>
    </div></div></div>
  );
};
export default ContactUs
