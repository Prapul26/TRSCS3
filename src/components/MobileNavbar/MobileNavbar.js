import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import "./MobileNavbar.css";
import { HiInboxArrowDown } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaHouse } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { MdOutlineCardMembership } from "react-icons/md";
import { IoArrowDown, IoArrowDownCircle, IoPerson } from "react-icons/io5";
import { TbArrowsRandom } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";
const MobileNavbar = () => {
  const [mobnav, setMobnav] = useState(false);
   const [intro, showIntro] = useState(false);
  const showMobnav = () => {
    setMobnav(!mobnav);
  };
  const cancelMenu = () => [setMobnav(false)];
  const handelIntro = () => {
    showIntro(!intro);
  };
  return (
    <div className="mobnav">
      <div className="menuButton" onClick={showMobnav}>
        {" "}
        <LuMenu size={30} />
      </div>
      {mobnav && (
        <div className="mobMenu">
          <div className="proPic2">
            <div className="pic4">
              <div className="picImage">
                <img src="https://tracsdev.apttechsol.com/public/uploads/custom-images/user-2024-07-09-02-52-30-9248.png" />
              </div>
              <div className="userName">
                <h2>Eren Smith</h2>
              </div>
            </div>
            <div className="cancelMenu" onClick={cancelMenu} style={{marginRight:"10px",marginTop:"10px"}}>
              <ImCross size={15} color="red"/>
            </div>
          </div>
         <Link to='/home'><div className="home4">
            <div style={{marginTop:"13px",marginRight:"12px"}}><FaHouse size={20} color="white" /></div>
            <div> <h2>Home</h2></div>
            </div></Link> 
        <Link to='/myMembership'><div className="myMembership4">
          <div style={{marginTop:"13px",marginRight:"12px"}}><MdOutlineCardMembership size={20} color="white"/> </div>
          <div> <h2>My Membership</h2></div>
          </div></Link>  
         <Link to='/accountSettings'> <div className="myProfile4">
          <div style={{marginTop:"13px",marginRight:"12px"}}><IoPerson size={20} color="white"/> </div>
          <div> <h2>My Profile</h2></div>
          </div></Link>
          <Link to='/affiliation'><div className="affiliation4">
          <div style={{marginTop:"13px",marginRight:"12px"}}><TbArrowsRandom size={20} color="white"/> </div>
          <div> <h2>Affiliation</h2></div>
          </div></Link>
         <Link to='/myAffiliation'><div className="myaffiliation4">
          <div style={{marginTop:"13px",marginRight:"12px"}}><BsGraphUp size={20} color="white"/> </div>
          <div> <h2>My Affiliation</h2></div>
          </div></Link> 
          <div className="introduction4" onClick={handelIntro}>
            <div style={{display:"flex"}}><div style={{marginTop:"13px",marginRight:"12px"}}><FaBriefcase size={20} color="white"/> </div>
          <div> <h2>Introduction</h2></div></div>
          <div style={{marginTop:"14px"}}><IoArrowDownCircle color="white" size={20}/></div>
            </div>
                {
                                                intro && <div className="intoNav" style={{marginLeft:"7px"}}>
                                                  <Link to='/contacts' style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex" ,marginBottom:"8px"}}><div>< RiContactsFill size={20}color="white" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"white",fontSize:'large'}}>Contacts</h3></div></Link>
                                                 <Link to='/inbox'  style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex",marginBottom:"8px"}}><div><HiInboxArrowDown  size={20}color="white" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"white",fontSize:'large'}}>Messages</h3></div></Link> 
                                                 <Link to='/email'style={{color:"inherit",textDecoration:"none"}} ><div style={{display:"flex",marginBottom:"8px"}}> <div><MdOutlineEmail size={20} color="white" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"white",fontSize:'large'}}>Template</h3></div></Link> 
                                                 <Link to='/signature'style={{color:"inherit",textDecoration:"none"}} > <div style={{display:"flex",marginBottom:"8px"}}><div><FaFileSignature  size={20}color="white" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"white",fontSize:'large'}}>Signature</h3></div></Link> 
                                  
                                                </div>
                                              }
          <div className="logout4">
          <div style={{marginTop:"13px",marginRight:"12px"}}><SlLogout size={20} color="white"/> </div>
          <div> <h2>Logout</h2></div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
