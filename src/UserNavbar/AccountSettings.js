import React from "react";
import UserHeader from "../components/UserHeader";
import "./AccountSettings.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
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
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
const AccountSettings = () => {
    const[intro,showIntro]=useState(false)
  const handelIntro=()=>{
    showIntro(!intro)
  }
  return (  <div> <UserHeader />
  <MobileNavbar/>
    <div className="overH">
    <div className="usernav">
         <Link to='/home' style={{color:"inherit",textDecoration:"none"}}><div className="home-container">
          <FaHome size={25} style={{marginRight:'6px'}}/> <h2>Home</h2>
          </div></Link> 
          <div className="navs">
          <Link to='/myMembership'  style={{color:"inherit",textDecoration:"none"}}> <div className="membership"><div className="a2"><MdOutlineCardMembership size={20} className="a1" style={{marginTop:"24px",paddingLeft:'5px',paddingRight:'5px'}}/></div><h3>My Membership</h3> </div></Link>
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
    <div className="fz1">
   
      <div className="contacts-container">
        <div className="c-header">
          <div className="c-h1">
            <h3>My Profile</h3>
          </div>
          <div className="c-h2">
            <p>Home</p>
            <span>.</span>
            <p>Dashboard</p>
            <span>.</span>
            <p>my profile</p>
          </div>
        </div>
      </div>
      <div className="prc1">
        <div className="profileContainer1">
          <div className="pc11">
            <label>Name</label>
            <br />
            <div className="nameInput">
              <div style={{ marginTop: "0px", marginLeft: "9px" }}>
                <MdPerson size={30} />
              </div>
              <input type="text" />
            </div>
            <div className="pc111">
              <div className="phone">
                <label>Phone</label>
                <br />
                <div className="phoneInput">
                  <div style={{ marginTop: "6px", marginLeft: "10px" }}>
                    <FaPhoneAlt size={22} />
                  </div>
                  <input type="text" />
                </div>
              </div>
              <div className="email">
                <label>Email</label>
                <br />
                <div className="emailInput">
                  {" "}
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <MdOutlineMailOutline size={26} />
                  </div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <label>About Me</label>
            <br />
            <textarea className="textArea" />
            <br />
            <label>Address</label>
            <br />
            <div className="addressInput">
              <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                <IoLocationSharp size={26} />
              </div>
              <input type="text" />
            </div>
          </div>
          <div className="pc12">
            <div className="proPic">
              <img
                src="https://tracsdev.apttechsol.com/public/uploads/custom-images/user-2024-07-09-02-52-30-9248.png"
                style={{ height: "100%", width: "100%" }}
              />
              <div>
                <button style={{ background: "orange" }}>Upload Image</button>
              </div>
            </div>
          </div>
        </div>
        <div className="update1">
          <button  style={{background:"orange"}}>Update</button>
        </div>{" "}
      </div>
      <div className="profileContainer2">
        <div className="changeph1">
          <h2>Change Password</h2>
        </div>
        <div className="currentnewp">
          <div className="current">
            <label>Current Password</label>
            <br />
            <div className="currentInput">
              <div  style={{marginTop:"3px"}}>
                <FaLock size={24}/>
              </div>{" "}
              <input type="text" />
            </div>
          </div>
          <div className="new">
            <label>New Password</label>
            <br />
            <div className="newInput">
              <div style={{marginTop:"3px"}}>
                <FaLock size={24}/>
              </div>{" "}
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="confirm">
          <label>Confirm Password</label>
          <br />
          <div className="confirmInput">
            <div style={{marginTop:"3px"}}>
              <FaLock size={24} />
            </div>{" "}
            <input type="text" />
          </div>
        </div>
        <div className="update2">
          <button style={{background:"orange"}}>Update</button>
        </div>
      </div>
    </div></div>
    </div>
  );
};

export default AccountSettings;
