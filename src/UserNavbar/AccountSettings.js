import React from "react";
import UserHeader from "../components/UserHeader";
import "./AccountSettings.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdBusiness, MdLink, MdLocationCity, MdOutlineCardMembership, MdOutlineFormatTextdirectionRToL } from "react-icons/md";
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
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
const AccountSettings = () => {
    const[intro,showIntro]=useState(false);
     const [settings,showSettings]=useState(false);
        const handelSettings=()=>{
         showSettings(!settings);
        }
  const handelIntro=()=>{
    showIntro(!intro)
  }
  return (  <div> <UserHeader />

    <div className="overH">
    <div className="usernav">
            <SideNav/>
            </div>
      
    <div className="fz1">
     <div><MobileNavbar/></div> 
      <div className="alfa">
      <div className="contacts-container">
      <div className="d-header" style={{background:"white",paddingTop:"0px",paddingBottom:"0px",display:"flex"}}>
            <h2>My Profile</h2><Link to='/myProfile'><button style={{background:"#eeba2b",paddingLeft:"30px",paddingRight:"30px",marginLeft:"25px",marginTop:"15px"}}>My Profile View</button></Link>
            
          </div>
      </div>
      <div className="prc1">
        <div className="profileContainer1">
          <div className="pc11">
            <label>First Name</label> <span style={{color:"red",fontWeight:'600'}}>*</span>
            <br />
            <div className="nameInput">
              <div style={{ marginTop: "0px", marginLeft: "9px" }}>
                <MdPerson size={30} />
              </div>
              <input type="text" />
            </div>
            <label>Last Name</label> <span  style={{color:"red",fontWeight:'600'}}>*</span>
            <br />
            <div className="nameInput">
              <div style={{ marginTop: "0px", marginLeft: "9px" }}>
                <MdPerson size={30} />
              </div>
              <input type="text" />
            </div>
            
            <div className="pc111">
              <div className="phone">
                <label>Phone</label> <span  style={{color:"red",fontWeight:'600'}}>*</span>
                <br />
                <div className="phoneInput">
                  <div style={{ marginTop: "6px", marginLeft: "10px" }}>
                    <FaPhoneAlt size={22} />
                  </div>
                  <input type="text" />
                </div>
              </div>
              
              <div className="email">
                <label>Email</label> <span  style={{color:"red",fontWeight:'600'}}>*</span>
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
            <div className="pc111">
              <div className="phone">
                <label>State</label>
                <br />
                <div className="phoneInput">
                  <div style={{ marginTop: "6px", marginLeft: "10px" }}>
                    <IoLocationSharp size={26} />
                  </div>
                  <input type="text" />
                </div>
              </div>
              
              <div className="email">
                <label>City</label>
                <br />
                <div className="emailInput">
                  {" "}
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <MdLocationCity size={26} />
                  </div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <label>Address</label>
            <br />
            <div className="addressInput">
              <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                <IoLocationSharp size={26} />
              </div>
              <input type="text" />
            </div>
            <label>Linked In Profile (URL)</label>
            <br />
            <div className="nameInput">
              <div style={{ marginTop: "0px", marginLeft: "9px" }}>
                <MdLink size={30} />
              </div>
              <input type="text" />
            </div>
            <label>Business Name</label>
            <br />
            <div className="nameInput">
              <div style={{ marginTop: "0px", marginLeft: "9px" }}>
                <MdBusiness size={30} />
              </div>
              <input type="text" />
            </div>
            <label>Business Description</label>
            <br />
           
            
            <textarea className="textArea" />
          
            <label>Website</label>
            <br />
            <div className="nameInput">
              <div style={{ marginTop: "0px", marginLeft: "9px" }}>
                <MdLink size={30} />
              </div>
              <input type="text" />
            </div>
          </div>

          <div className="pc12">
            <div className="proPic">
              <img
                src="https://img.freepik.com/premium-photo/portrait-smile-man-with-positive-confidence-carefree-against-grey-studio-background-face-male-person-human-with-cheerful-attitude-freedom-model-with-joy-canada-relax_590464-177008.jpg"
                style={{ height: "100%", width: "100%" }}
              />
              <div>
                <button style={{ background: "#eeba2b" }}>Upload Image</button>
              </div>
            </div>
          </div>
        </div>
        <div className="update1">
          <button  style={{background:"#eeba2b"}}>Update</button>
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
          <button style={{background:"#eeba2b"}}>Update</button>
        </div>
      </div></div>
    </div>
    </div>
    
    </div>
  );
};

export default AccountSettings;
