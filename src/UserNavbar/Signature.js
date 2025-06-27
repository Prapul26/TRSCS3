import React from "react";
import "./Signature.css";
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
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
const Signature = () => {
  const [intro, showIntro] = useState(false);
  const [settings,showSettings]=useState(false);
   const [showSidebar, setShowSidebar] = useState(false);
  const [data,setData]=useState("")
  const [msg,setMsg]=useState("")
     const showMobnav = () => {
       setShowSidebar(prev => !prev);
   
     };
     const [text,setText]=useState("")
     const handelSettings=()=>{
      showSettings(!settings);
     }
  const handelIntro = () => {
    showIntro(!intro);
  };
const handleSave=async(e)=>{
  e.preventDefault();
    const token = localStorage.getItem("authToken");
    try{
      const response=await axios.post(`${process.env.REACT_APP_API_BASE_URL}/signature_store_form`,{
        name : text
      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }); setMsg(response.data.message || "Signature saved successfully");
    
    }  catch (err) {
  const errorMessage =
    err.response?.data?.message || "Data not saved. Please try again.";
  setMsg(errorMessage);
}
}
  return (
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
      <h2>Signature</h2>
      </div>
          <div className="signature-holder">
            <form onSubmit={handleSave}>
              <label>
                <h2>Signature</h2>
              </label>
              <br />
              <textarea
                placeholder=" Name:
        Identity Name:
        Email:
        Calender:"
              value={text} onChange={(e)=>setText(e.target.value)} />
              <br />
              <button type="submit">SAVE</button>
            </form><div style={{textAlign:"center"}}>{msg}</div>
          </div>
          
        </div>
      </div>
    </div></div>
  );
};

export default Signature;
