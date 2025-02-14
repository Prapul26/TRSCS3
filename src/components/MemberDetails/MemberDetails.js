import React, { useEffect, useState } from "react";
import "./MemberDetails.css";
import { FaRegBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";

import { IoMail, IoPersonSharp } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { GrFormSchedule } from "react-icons/gr";
import Header from "../Heaader/Header";
import { FaLinkedinIn } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineBusiness } from "react-icons/md"
import { FaHeart } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaCertificate } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaCopy } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuRectangleVertical } from "react-icons/lu";
import { FaShare } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import Logo from "../assets/M-D1.jpg";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { TbArrowsRandom, TbWorld, TbWorldWww } from "react-icons/tb";

const MemberDetails = () => {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="member-holder">
        <div className="ProfilePic-holder">
          <div className="backgroundPic">
            <img src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
          <div className="userPic">
            <img src="https://tracsdev.apttechsol.com/public/uploads/custom-images/user-2024-07-09-02-52-30-9248.png" />
          </div>
        </div>
        <div className="userNAME"><h2>Santhosh</h2></div>
        <div  className="section2" style={{display:"flex"}}><div ><IoPersonSharp size={20}/></div><div style={{marginLeft:"10px",marginTop:"2px"}}><h3>Agent</h3></div> <div style={{marginLeft:"20px"}}><MdOutlineBusiness  size={20} /> </div><div style={{marginLeft:"10px",marginTop:"2px"}}><h3>Insurance Company</h3></div></div>
        <div className="divider">
 
        <div className="section3">
          <div className="divider1">  <div className="EmailLink">
        <div><IoMdMail /></div>
        <div><h3>Email</h3></div></div>
       <div className="PhoneLink">
       <div><IoCall /></div>
       <div><h3>987080979867</h3></div>
       </div></div>
     <div className="divider2"> <div className="WebsiteLink"> 
       <div><TbArrowsRandom /></div>
       <div><h3>Affiliation</h3></div> </div>
       <div className="AffiliationLink">
       <div><TbWorldWww /></div>
       <div><h3>WebsiteLink</h3></div></div>
      
       </div>
        </div>
          <div className="About-Container">
          <div><h2>About Us:</h2></div>
          <div><p>At TRACS, we believe in the power of connections. Our platform is designed to be the heartbeat of professional networking, where members come together to forge meaningful relationships, exchange ideas, and unlock new opportunities. Our platform is designed for individuals and businesses seeking meaningful networking experiences.</p></div>
        </div></div>
       
       
      </div>
      <Footer />
    </div>
  );
};
export default MemberDetails;
