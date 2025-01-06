import React, { useState } from "react";
import "./UserHeader.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
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
import { Link } from "react-router-dom";
const UserHeader = () => {
  const [userNav ,showUserNav]=useState(false);
  const[intro,showIntro]=useState(false)
const handelIntro=()=>{
  showIntro(!intro)
}
const handelUserNav=()=>{
  showUserNav(!userNav)
}
  return (
    <div className="header" style={{display:"flex"}}>
      {
        userNav && <div className="usernav">
          <div className="home-container">
          <FaHome size={25} style={{marginRight:'6px'}}/> <h2>Home</h2>
          </div>
          <div className="navs">
          <Link to='/'  style={{color:"inherit",textDecoration:"none"}}> <div className="membership"><div className="a2"><MdOutlineCardMembership size={20} className="a1" style={{marginTop:"24px",paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>My Membership</h3> </div></Link>
           <Link to='/accountSettings'  style={{color:"inherit",textDecoration:"none"}}><div className="accountSettings"><div className="a3"><IoSettingsSharp size={20}  style={{marginTop:"22px",paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>Account Settings/Profile</h3> </div></Link> 
            <div className="businessProfile"><div className="a5"><ImProfile size={20} style={{marginTop:"22px",paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>My Business Profile</h3> </div>
           <div className="intro1">
            <div className="introduction" onClick={handelIntro}><h3><span style={{marginTop:'5px'}}><FaBriefcase  size={20} style={{paddingLeft:'5px',paddingRight:'5px' ,alignContent:"center",justifyContent:"center"}}/></span>Introduction</h3> {intro ?< IoIosArrowDropup size={22} style={{marginTop:"20px"}}/>:<IoIosArrowDropdown size={22} style={{marginTop:"20px"}} />}</div>
            {
              intro && <div className="intoNav">
                <Link to='/contacts' style={{color:"inherit",textDecoration:"none"}}><h3>< RiContactsFill style={{marginRight:'3px',}} />Contacts</h3></Link>
               <Link to='/inbox'  style={{color:"inherit",textDecoration:"none"}}><h3><HiInboxArrowDown style={{marginRight:'3px'}}/>Inbox</h3></Link> 
               <Link to='/intro'style={{color:"inherit",textDecoration:"none"}} > <h3><IoBookOutline style={{marginRight:'3px'}}/>Make Introduction</h3></Link>
               <Link to='/email'style={{color:"inherit",textDecoration:"none"}} ><h3><MdOutlineEmail style={{marginRight:'3px'}} />Email Templates</h3></Link> 
              </div>
            }</div>
            <div className="logout" style={{display:"flex"}}><div className="a4"><SlLogout style={{marginTop:'23px',paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>Logout</h3> </div>
          </div>
        </div>
      }
      <div className="headerContainer">
        <div  className="show"  style={{display:"flex"}}>
       
        <div className="arrow" onClick={handelUserNav}>
      
         <div className="a1">{userNav ?  <FaArrowCircleLeft size={26} style={{paddingLeft:"10px"}}/>:<FaArrowCircleRight size={26}   style={{paddingLeft:"10px"}}/>}</div>
        </div></div>
        <div className="userProfile-container">
          <div className="profile-pic">
            <img src="https://tracsdev.apttechsol.com/public/uploads/custom-images/user-2024-07-09-02-52-30-9248.png" style={{height:"100%",width:"100%"}}/>
          </div>
          <div className="profile-name"><h3>Santhosh</h3></div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
