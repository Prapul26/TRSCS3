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
        <div className="About-Container">
          <div><h2>About Us:</h2></div>
          <div><p>At TRACS, we believe in the power of connections. Our platform is designed to be the heartbeat of professional networking, where members come together to forge meaningful relationships, exchange ideas, and unlock new opportunities. Our platform is designed for individuals and businesses seeking meaningful networking experiences.</p></div>
        </div>
        <div className="informationHolder">
        <div className="informaion">
          <div><h3>Information :</h3></div>
          <div className="infoDiv">
            <div className="infoDiv1">
             <div style={{display:"flex",marginBottom:"20px"}}> <div ><IoPersonSharp size={20}/></div><div style={{marginLeft:"10px",marginTop:"-4px"}}><h3>Agent</h3></div> </div>
              <div style={{display:"flex",marginBottom:"20px"}}>  <div><MdOutlineBusiness  size={20} /> </div><div style={{marginLeft:"10px",marginTop:"-4px"}}><h3>Insurance Company</h3></div></div>
            </div>
            <div className="infoDiv2">
              <div style={{display:"flex",marginBottom:"20px"}}><div ><IoCall  size={20}/></div> <div style={{marginLeft:"10px",marginTop:"-4px"}}><h3>8028329328</h3></div></div>
              <div style={{display:"flex",marginBottom:"20px"}}> <div><IoMail  size={20}/></div><div style={{marginLeft:"10px",marginTop:"-4px"}}><h3>sample@mail.com</h3></div></div>
            </div>
          </div>
         
          </div>
           <div className="linksContainer">
           <div style={{display:"flex",marginTop:"5px",border:"1px solid black",padding:"10px",background:"white",borderRadius:"5px"}}><div ><FaLinkedinIn  size={20}/></div> <div style={{marginLeft:"10px",marginTop:"0px"}}><h3>Linked In</h3></div></div>
           <div style={{display:"flex",marginTop:"5px",border:"1px solid black",padding:"10px",background:"white",borderRadius:"5px"}}><div  ><TbArrowsRandom  size={20}/></div> <div style={{marginLeft:"10px",marginTop:"0px"}}><h3>Affiliation</h3></div></div>
           <div style={{display:"flex",marginTop:"5px",border:"1px solid black",padding:"10px",background:"white",borderRadius:"5px"}}><div  ><TbWorldWww size={20}/></div> <div style={{marginLeft:"10px",marginTop:"-1px"}}><h3>website</h3></div></div>
          </div>
        </div>
       
      </div>
      <Footer />
    </div>
  );
};
export default MemberDetails;
