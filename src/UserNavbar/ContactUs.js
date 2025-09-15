import React, { useEffect } from 'react'
import "./ContactUs.css"
import UserHeader from "../components/UserHeader";

import { ImCross, ImProfile } from "react-icons/im";
import { IoIosArrowDropdown, IoIosInformationCircle } from "react-icons/io";
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
//site key
// 6LdK2aMrAAAAADGRveXnSKL2E0ZzCVnD1n7eVAUK
const ContactUs = () => {
   const [intro, showIntro] = useState(false);
  const [settings,showSettings]=useState(false);
   const [showSidebar, setShowSidebar] = useState(false);
  const [data,setData]=useState("")
  const [msg,setMsg]=useState("")
      const [showpage, setShowPage] = useState(false);
      const[capVal,setCapVal]=useState("");
      const[email,setEmail]=useState("");
      const [description,setDescription]=useState("");
        const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // "success" | "error"
  
     const showMobnav = () => {
       setShowSidebar(prev => !prev);
   
     };
    
  
const handleSave=async(e)=>{
  e.preventDefault();
   try{
const token=sessionStorage.getItem("authToken");
const formData=new FormData();
formData.append("user_id",data.user?.id);
formData.append("email",data.user?.email);
formData.append("description",description);
formData.append("g-recaptcha-response","test");

const response=await axios.post("https://tracsdev.apttechsol.com/api/storeusercontactpage",formData, {
          headers: {
            Authorization: `Bearer ${token}`,
           
          },
        });
        setMessage(response.data.message);
        setMessageType("success");
      setTimeout(() => {
       setMessage(""); // change "/email" to your actual email page route
      }, 2000);


   }catch(err){
    setMessage("message failed to send");
     setMessageType("error");
      setTimeout(() => {
       setMessage(""); // change "/email" to your actual email page route
      }, 2000);
   }
}
useEffect(()=>{
const fetchdata=async()=>{
try{
   const token = sessionStorage.getItem("authToken");
const response=await axios.get("https://tracsdev.apttechsol.com/api/user-contact-us",{
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
setData(response.data);
setEmail(response.data.user?.email)
console.log("data"+ data)
}catch(error){
 console.error("Update failed:", error);
      setMessage("Failed to update profile. Please try again.");
}
}
fetchdata();},[])

console.log("formData :" + data.user?.email,data.user?.id,description,capVal)
  return (
    <div>
  
    <div className='mobMenuaa'>
              {<div className="errmsg" style={{ backgroundColor: messageType === "success" ? "green" : "red" }}><p>{message}</p></div>}

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
              <div className='emailContainer'><p>{data.user?.email}</p></div>
              <br/>
              <label>Message</label>
              <br/>
              <textarea className='rrtext' value={description} onChange={(e)=>setDescription(e.target.value)}/>
              <br/>
              <ReCAPTCHA 
               sitekey='6LdK2aMrAAAAADGRveXnSKL2E0ZzCVnD1n7eVAUK'
               onChange={(val)=>setCapVal(val)}/>
             <div> <button type="submit">SUBMIT</button></div>
            </form><div style={{textAlign:"center"}}>{msg}</div>
            {message}
          </div>
          
        </div>
      </div>
    </div></div></div>
  );
};
export default ContactUs
