import React from 'react'
import { FaFileSignature } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdOutlineCardMembership } from "react-icons/md";
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
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import "./SideNav.css"
const SideNav = () => {
     const [intro, showIntro] = useState(false);
      const [settings,showSettings]=useState(false);
         const handelSettings=()=>{
          showSettings(!settings);
         }
      const handelIntro = () => {
        showIntro(!intro);
      };
  return (
    <div>
         
                                <div className="navs">
                               <Link to="/home"> <div className='tracsimG'><img src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png"/></div></Link>  
                                <div onClick={handelSettings} style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid black"}} ><div style={{display:"flex"}}><div style={{marginTop:'19px',marginRight:"5px",marginLeft:"px"}}><IoSettingsSharp size={20}/></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"19px",marginLeft:"-20px"}}>Account Settings</ul></div> <div style={{marginTop:"15px",marginLeft:'10px'}}>{settings ?< RiArrowDropUpLine size={25} style={{marginTop:"0px"}}/>:<RiArrowDropDownLine size={25} style={{marginTop:"0px"}} />}</div>
                               
                                </div>
                                {
                                  settings && <div style={{marginLeft:"15px"}}>
                                              <Link to='/myMembership'  style={{color:"inherit",textDecoration:"none"}}> <div style={{display:"flex"}} className='uk1'> <div style={{paddingLeft:"15px"}}>< MdOutlineCardMembership style={{marginTop:'24px'}} /></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"16px",marginTop:"22px",marginLeft:"-20px"}}>My Membership</ul></div></Link>
                                              <Link to='/accountSettings'  style={{color:"inherit",textDecoration:"none"}}> <div style={{display:"flex"}} className='uk1'> <div style={{paddingLeft:"15px"}}>< IoPerson style={{marginTop:'24px'}} /></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"16px",marginTop:"22px",marginLeft:"-20px"}}>My Profile</ul></div></Link>
                                              <Link to='/affiliation'  style={{color:"inherit",textDecoration:"none"}}> <div style={{display:"flex"}} className='uk1'> <div style={{paddingLeft:"15px"}}>< TbArrowsRandom style={{marginTop:'24px'}} /></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"16px",marginTop:"22px",marginLeft:"-20px"}}>Affiliation</ul></div></Link>
                                      
                                              <Link to='/passwordChange'  style={{color:"inherit",textDecoration:"none"}}> <div style={{display:"flex"}} className='uk1'> <div style={{paddingLeft:"15px"}}>< RiLockPasswordFill style={{marginTop:'24px'}} /></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"16px",marginTop:"22px",marginLeft:"-20px"}}>My Password</ul></div></Link>


                                  </div>
                                }
                                 <div className="intro1">
                                 <div onClick={handelIntro} style={{display:"flex",justifyContent:"space-between"}} ><div style={{display:"flex"}}><div style={{marginTop:'19px',marginRight:"5px",marginLeft:"5px"}}><FaBriefcase size={20}/></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"19px",marginLeft:"-20px"}}>Introduction</ul></div> <div style={{marginTop:"15px"}}>{settings ?< RiArrowDropUpLine size={22} style={{marginTop:"0px"}}/>:<RiArrowDropDownLine size={25} style={{marginTop:"0px"}} />}</div>
                               
                               </div>                                  {
                                    intro && <div className="intoNav" style={{marginLeft:"7px"}}>
                                      <Link to='/contacts' style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex"}} className='uk1'> <div style={{paddingLeft:"15px"}}>< RiContactsFill style={{marginTop:'24px'}} /></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"16px",marginTop:"22px",marginLeft:"-20px"}}>Contacts</ul></div></Link>
                                     <Link to='/inbox'  style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex"}} className='uk1'><div style={{paddingLeft:"15px"}}><HiInboxArrowDown style={{marginTop:'24px'}} /></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"16px",marginTop:"22px",marginLeft:"-20px"}}>Messages</ul></div></Link> 
                                     <Link to='/email'style={{color:"inherit",textDecoration:"none"}} ><div style={{display:"flex"}} className='uk1'> <div style={{paddingLeft:"15px"}}><MdOutlineEmail style={{marginTop:'24px'}} /></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"16px",marginTop:"22px",marginLeft:"-20px"}}>Template</ul></div></Link> 
                                     <Link to='/signature'style={{color:"inherit",textDecoration:"none"}} > <div style={{display:"flex"}} className='uk1'><div style={{paddingLeft:"15px"}}><FaFileSignature style={{marginTop:'24px'}} /></div><ul style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"600",fontSize:"16px",marginTop:"22px",marginLeft:"-20px"}}>Signature</ul></div></Link> 
                      
                                    </div>
                                  }</div>
                                </div>
    </div>
  )
}

export default SideNav
