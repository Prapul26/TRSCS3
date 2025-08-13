import React from 'react'
import { FaFileSignature, FaRegComment, FaRegFile, FaUnlockAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdOutlineCardMembership, MdOutlineCreditCard } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { RiArrowDropDownLine, RiArrowDropUpLine, RiLockPasswordFill } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";
import { TbArrowsRandom } from "react-icons/tb";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import "./SideNav.css"
import { CiFileOn } from 'react-icons/ci';
const SideNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [intro, showIntro] = useState(true);
  const [settings, showSettings] = useState(true);
  const[showResources,setResources]=useState(false);
  const handleResources=()=>{
    setResources(!showResources)
  }
  const handelSettings = () => {
    showSettings(!settings);
  }
  const handelIntro = () => {
    showIntro(!intro);
  };
  return (
    <div>

      <div className="navs">
        <Link to="/home"> <div className='tracsimG'><img src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png" /></div></Link>
        <div className='intro9'>
          <div className={`asDiv ${(
            currentPath === "/myMembership" ||
            currentPath === "/accountSettings" ||
            currentPath === "/affiliation" ||
            currentPath === "/passwordChange"
          ) ? " " : ""}`} onClick={handelSettings} style={{ marginBottom: "5px" }} ><div style={{ display: "flex" }}><div style={{ marginTop: '19px', marginRight: "5px", marginLeft: "px" }}><IoSettingsSharp size={20} /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "19px", marginLeft: "-20px" }}>Account Settings</ul></div> <div style={{ marginTop: "15px", marginLeft: '10px' }}>{settings ? < RiArrowDropUpLine size={25} style={{ marginTop: "0px" }} /> : <RiArrowDropDownLine size={25} style={{ marginTop: "0px" }} />}</div>

          </div>
          {
            settings && <div style={{ marginLeft: "15px" }}>
              <Link to='/myMembership' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/myMembership" ? "active" : ""}`}> <div style={{ display: "flex" }} className={`uk1 ${currentPath === "/myMembership" ? "active" : ""}`}> <div style={{ paddingLeft: "15px" }}>< MdOutlineCardMembership /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "16px", marginLeft: "-20px", marginTop: "0px" }}>My Membership</ul></div></Link>
              <Link to='/accountSettings' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/accountSettings" ? "active" : ""}`}> <div style={{ display: "flex" }} className={`uk1 ${currentPath === "/accountSettings" ? "active" : ""}`}> <div style={{ paddingLeft: "15px" }}>< IoPerson /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "16px", marginTop: "0px", marginLeft: "-20px" }}>Dashboard</ul></div></Link>
              <Link to='/passwordChange' style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid green" }} className={`menu-item ${currentPath === "/passwordChange" ? "active" : ""}`} > <div style={{ display: "flex", borderBottom: "1px solid black" }} className={`uk1 ${currentPath === "/passwordChange" ? "active" : ""}`} > <div style={{ paddingLeft: "15px" }}>< FaUnlockAlt  /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "16px", marginTop: "0px", marginLeft: "-20px" }}>Change Password</ul></div></Link>

              <Link to='/affiliation' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/affiliation" ? "active" : ""}`} > <div style={{ display: "flex" }} className={`uk1 ${currentPath === "/affiliation" ? "active" : ""}`}> <div style={{ paddingLeft: "15px", borderBottom: "1px solid transparent" }}>< TbArrowsRandom /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "16px", marginTop: "0px", marginLeft: "-20px" }}>Affiliation</ul></div></Link>



            </div>
          }</div>
        <div className="intro1">
          <div className={`inDiv ${(
            currentPath === "/contacts" ||
            currentPath === "/inbox" ||
            currentPath === "/email" ||
            currentPath === "/signature"
          ) ? " " : ""}`} onClick={handelIntro} style={{ marginBottom: "5px" }} ><div style={{ display: "flex" }}><div style={{ marginTop: '19px', marginRight: "5px", marginLeft: "5px" }}><FaBriefcase size={20} /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "19px", marginLeft: "-20px" }}>Introduction</ul></div> <div style={{ marginTop: "15px" }}>{intro ? < RiArrowDropUpLine size={22} style={{ marginTop: "0px" }} /> : <RiArrowDropDownLine size={25} style={{ marginTop: "0px" }} />}</div>

          </div>                                  {
            intro && <div className="intoNav" style={{ marginLeft: "7px" }}>
              <Link to='/contacts' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/contacts" ? "active" : ""}`}><div style={{ display: "flex" }} className={`uk1 ${currentPath === "/contacts" ? "active" : ""}`}> <div style={{ paddingLeft: "15px" }}>< RiContactsFill /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "16px", marginTop: "0px", marginLeft: "-20px" }}>My Contacts</ul></div></Link>
              <Link to='/inbox' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/inbox" ? "active" : ""}`}><div style={{ display: "flex" }} className={`uk1 ${currentPath === "/inbox" ? "active" : ""}`}><div style={{ paddingLeft: "15px" }}><HiInboxArrowDown /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "16px", marginTop: "0px", marginLeft: "-20px" }}>Messages</ul></div></Link>
              <Link to='/email' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/email" ? "active" : ""}`}><div style={{ display: "flex" }} className={`uk1 ${currentPath === "/email" ? "active" : ""}`}> <div style={{ paddingLeft: "15px" }}><MdOutlineEmail /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "16px", marginTop: "0px", marginLeft: "-20px" }}>Email Template</ul></div></Link>
              <Link to='/signature' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/signature" ? "active" : ""}`}> <div style={{ display: "flex", borderBottom: "1px solid transparent" }} className={`uk1 ${currentPath === "/signature" ? "active" : ""}`}><div style={{ paddingLeft: "15px" }}><FaFileSignature /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "16px", marginTop: "0px", marginLeft: "-20px" }}>Email Signature</ul></div></Link>

            </div>
          }</div>

          <div style={{borderBottom:"1px solid black"}}>
<div className='resources'onClick={handleResources}>
  <div style={{marginTop:"15px"}}>< MdOutlineCreditCard size={22}/></div>
  <div style={{marginLeft:"-65px",marginTop:'-4px'}}><ul  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "19px", marginLeft: "-20px" }}>Resources</ul></div>
  <div style={{marginTop:"15px"}} >{showResources ? < RiArrowDropUpLine size={22} style={{ marginTop: "0px" }} /> : <RiArrowDropDownLine size={25} style={{ marginTop: "0px" }} />}</div>
</div>
{
  showResources &&(
              <Link to='/help' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/contacts" ? "active" : ""}`}><div style={{ display: "flex" }} className={`uk1 ${currentPath === "/help" ? "active" : ""}`}> <div style={{ paddingLeft: "15px" }}>< FaRegFile /></div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "16px", marginTop: "0px", marginLeft: "-20px" }}>App Help</ul></div></Link>

  )
}
          </div>

        <Link to='/contactUs'  style={{textDecoration:"none",color:"inherit"}}><div className={`rdsewdx ${currentPath === "/contactUs" ? "active" : ""}`}>
          <div style={{marginTop:"20px"}}><FaRegComment size={20} /></div>
          <div><ul style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "18px", marginLeft: "-20px" }}>Contact Us</ul></div>
        </div></Link>
       
      </div>
    </div>
  )
}

export default SideNav
