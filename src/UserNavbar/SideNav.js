import React from 'react'
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
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
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
           <Link to='/home' style={{color:"inherit",textDecoration:"none"}}><div className="home-container">
                                <FaHome size={25} style={{marginRight:'6px'}}/> <h2>Home</h2>
                                </div></Link> 
                                <div className="navs">
                                <div onClick={handelSettings} style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid black"}} ><div style={{display:"flex"}}><div style={{marginTop:'19px',marginRight:"5px",marginLeft:"5px"}}><IoSettingsSharp size={20}/></div><h3>Account Settings</h3></div> <div style={{marginTop:"15px",marginLeft:'30px'}}>{settings ?< IoIosArrowDropup size={22} style={{marginTop:"0px"}}/>:<IoIosArrowDropdown size={22} style={{marginTop:"0px"}} />}</div>
                               
                                </div>
                                {
                                  settings && <div style={{marginLeft:"15px"}}>
                                              <Link to='/myMembership'  style={{color:"inherit",textDecoration:"none"}}> <div className="membership"><div className="a2"><MdOutlineCardMembership size={18} className="a1" style={{marginTop:"24px",paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>My Membership</h3> </div></Link>
                                              <Link to='/accountSettings'  style={{color:"inherit",textDecoration:"none"}}> <div className="membership"><div className="a2"><IoPerson size={16} className="a1" style={{marginTop:"24px",paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>My Profile</h3> </div></Link>
                      
                                  </div>
                                }
                                 <div className="intro1">
                                 <div onClick={handelIntro} style={{display:"flex",justifyContent:"space-between"}} ><div style={{display:"flex"}}><div style={{marginTop:'19px',marginRight:"5px",marginLeft:"5px"}}><FaBriefcase size={20}/></div><h3>Introduction</h3></div> <div style={{marginTop:"15px"}}>{settings ?< IoIosArrowDropup size={22} style={{marginTop:"0px"}}/>:<IoIosArrowDropdown size={22} style={{marginTop:"0px"}} />}</div>
                               
                               </div>                                  {
                                    intro && <div className="intoNav" style={{marginLeft:"7px"}}>
                                      <Link to='/contacts' style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex"}}><div>< RiContactsFill style={{marginRight:'7px',marginTop:'24px'}} /></div><h3>Contacts</h3></div></Link>
                                     <Link to='/inbox'  style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex"}}><div><HiInboxArrowDown style={{marginRight:'7px',marginTop:'24px'}} /></div><h3>Messages</h3></div></Link> 
                                     <Link to='/email'style={{color:"inherit",textDecoration:"none"}} ><div style={{display:"flex"}}> <div><MdOutlineEmail style={{marginRight:'7px',marginTop:'24px'}} /></div><h3>Template</h3></div></Link> 
                                     <Link to='/signature'style={{color:"inherit",textDecoration:"none"}} > <div style={{display:"flex"}}><div><FaFileSignature style={{marginRight:'7px',marginTop:'24px'}} /></div><h3>Signature</h3></div></Link> 
                      
                                    </div>
                                  }</div>
                                  <div className="logout" style={{display:"flex"}}><div className="a4"><SlLogout style={{marginTop:'23px',paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>Logout</h3> </div>
                                </div>
    </div>
  )
}

export default SideNav
