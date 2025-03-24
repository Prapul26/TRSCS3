import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import "./MobileNavbar.css";
import { HiInboxArrowDown } from "react-icons/hi2";
import { MdAccountCircle, MdOutlineEmail } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaHouse } from "react-icons/fa6";
import { RiContactsFill, RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineCardMembership } from "react-icons/md";
import { IoArrowDown, IoArrowDownCircle, IoPerson, IoSettingsSharp } from "react-icons/io5";
import { TbArrowsRandom } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaArrowAltCircleUp, FaArrowCircleDown, FaArrowCircleRight } from "react-icons/fa";

const MobileNavbar = () => {
  const [mobnav, setMobnav] = useState(false);
   const [intro, showIntro] = useState(false);
   const [intro2, showIntro2] = useState(false);
     const [menuDrop, setMenuDrop]=useState(false);
     const handelMenuDrop=()=>{
   setMenuDrop(!menuDrop)
     }
  const showMobnav = () => {
    setMobnav(!mobnav);
  };
  const cancelMenu = () => [setMobnav(false)];
  const handelIntro = () => {
    showIntro(!intro);
  };
  const handelIntro2 = () => {
    showIntro2(!intro2);
  };
  return (
    <div style={{display:"flex"}}>
      <div>
      {mobnav && (
        <div className={`mobMenu ${mobnav ? "open" : ""}`}>
          
          <div style={{height:"85px",background:"rgb(28, 41, 181)",width:"100%"}}></div>

          
          <div className="introduction41" onClick={handelIntro2}>
            <div style={{display:"flex"}}><div style={{marginTop:"13px",marginRight:"12px"}}><IoSettingsSharp size={20} color="black"/> </div>
          <div style={{marginTop:"-9px"}}> <h2>Application Setting</h2></div></div>
          <div style={{marginTop:"14px"}}><IoArrowDownCircle color="black" size={20}/></div>
            </div>
                {
                                                intro2 && <div className="intoNav" style={{marginLeft:"7px"}}>
                                                  <Link to='/myMembership' style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex" ,marginBottom:"8px"}}><div>< MdOutlineCardMembership size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>My Membership</h3></div></Link>
                                                 <Link to='/accountSettings'  style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex",marginBottom:"8px"}}><div><IoPerson  size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>My Profile</h3></div></Link> 
                                                 <Link to='/passwordChange'style={{color:"inherit",textDecoration:"none"}} ><div style={{display:"flex",marginBottom:"8px"}}> <div><IoPerson size={20} color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>My Password</h3></div></Link> 
                                                 <Link to='/affiliation'style={{color:"inherit",textDecoration:"none"}} > <div style={{display:"flex",marginBottom:"8px"}}><div><TbArrowsRandom  size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Affiliation</h3></div></Link> 
                                  
                                                </div>
                                              }




          <div className="introduction4" onClick={handelIntro}>
            <div style={{display:"flex"}}><div style={{marginTop:"13px",marginRight:"12px"}}><FaBriefcase size={20} color="black"/> </div>
          <div style={{marginTop:"-9px"}}> <h2>Introduction</h2></div></div>
          <div style={{marginTop:"14px"}}><IoArrowDownCircle color="black" size={20}/></div>
            </div>
                {
                                                intro && <div className="intoNav" style={{marginLeft:"7px"}}>
                                                  <Link to='/contacts' style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex" ,marginBottom:"8px"}}><div>< RiContactsFill size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Contacts</h3></div></Link>
                                                 <Link to='/inbox'  style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex",marginBottom:"8px"}}><div><HiInboxArrowDown  size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Messages</h3></div></Link> 
                                                 <Link to='/email'style={{color:"inherit",textDecoration:"none"}} ><div style={{display:"flex",marginBottom:"8px"}}> <div><MdOutlineEmail size={20} color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Template</h3></div></Link> 
                                                 <Link to='/signature'style={{color:"inherit",textDecoration:"none"}} > <div style={{display:"flex",marginBottom:"8px"}}><div><FaFileSignature  size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Signature</h3></div></Link> 
                                  
                                                </div>
                                              }
         
        </div>
      )}
      </div>
    <div className={`mobnav ${mobnav ?"move":""}`}>
      <div style={{display:"flex"}}><div className="menuButton" onClick={showMobnav}>
        {" "}
        <LuMenu size={30} />
      </div>
      <Link to="/home" style={{color:"inherit"}}><div style={{marginTop:"17px"}}>
        <FaHouse size={30 }/></div></Link>
        </div>
      <div style={{display:"flex"}}>
        <div className={`mobnavPic ${mobnav ?"hidden":""}`}><img src="https://cdn.motiondesign.school/uploads/2021/05/radik.jpg"/></div>
        
        <div className={`profile-name ${mobnav ?"hidden":""}`} onClick={handelMenuDrop} style={{marginTop:"22px"}}>
                {menuDrop ?(  <FaArrowAltCircleUp color="white" size={20} />):(<FaArrowCircleDown color="white" size={20}/> )}
                {menuDrop && <div className="menuDrop">
              <div style={{display:"flex",borderBottom:"1px solid black",marginBottom:"5px"}}> <div style={{marginBottom:"5px"}}><RiLogoutBoxLine /></div><h4>Logout</h4></div>
           <Link to="/myMembership" style={{textDecoration:"none",color:"inherit"}}>  <div style={{display:"flex"}}><div><MdAccountCircle /></div><h4>My Account</h4></div></Link></div>}
                </div>
        </div>
      
    </div></div>
  );
};

export default MobileNavbar;
