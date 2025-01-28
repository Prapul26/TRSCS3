import React, { useState } from "react";
import "./BusinessProfile.css";
import UserHeader from "../components/UserHeader";
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
import { IoPerson } from "react-icons/io5";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";

const BusinessProfile = () => {
  const [activeTab, setActiveTab] = useState("active");
 const[intro,showIntro]=useState(false)
 const [settings,showSettings]=useState(false);
    const handelSettings=()=>{
     showSettings(!settings);
    }
  const handelIntro=()=>{
    showIntro(!intro)
  }
  return (
    <div> <UserHeader />
    <MobileNavbar/>
      <div className="BPPPPP">
       <div className="usernav">
                 <SideNav/>
                 </div>
    <div className="BPP">
     
      <div className="c-header">
        <div className="c-h1">
          <h3>Business Profile</h3>
        </div>
        <div className="c-h2">
          <p>Home</p>
          <span>.</span>
          <p>Dashboard</p>
          <span>.</span>
          <p>Business Profile</p>
        </div>
      </div>
    <Link to='/createBusinessProfile'><div className="businessButton">
        <button>Create Business Profile</button>
      </div></Link>  
      <br />
      <div className="activeStatus">
        <div className="activeStatus-holder">
          <div
            className={`active ${activeTab === "active" ? "selected" : ""}`}
            onClick={() => setActiveTab("active")}
          >
            <h3>Active</h3>
            <span
              style={{
                height: "26px",
                borderRadius: "50%",
                background: "green",
                width: "26px",
                marginLeft: "6px",
                textAlign: "center",
                color: "white",
                lineHeight: "26px",
              }}
            >
              0
            </span>
          </div>
          <div
            className={`inactive ${activeTab === "inactive" ? "selected" : ""}`}
            onClick={() => setActiveTab("inactive")}
          >
            <h3>Inactive</h3>
            <span
              style={{
                height: "26px",
                borderRadius: "50%",
                background: "red",
                width: "26px",
                marginLeft: "6px",
                textAlign: "center",
                color: "white",
                lineHeight: "26px",
              }}
            >
              0
            </span>
          </div>
        </div>
        {activeTab === "active" ? (
          <div className="result">
            <h1>No Active Results Found</h1>
          </div>
        ) : (
          <div className="result">
            <h1>No Inactive Results Found</h1>
          </div>
        )}
      </div>
    </div></div>
    </div>
  );
};

export default BusinessProfile;
