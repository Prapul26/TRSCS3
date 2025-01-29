import React, { useState } from "react";
import "./MobileNavbar.css";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
const MobileNavbar = () => {
  const[intros,showIntrows]=useState(false);
  const handelIntrows=()=>{
    showIntrows(!intros);
  }
  return (
    <div>
      <div className="mob-nav">
        <Link to="/myMembership" style={{textDecoration:"none",color:"inherit"}}>
          <div className="mobMembership">My Membership</div>
        </Link>
        <Link to="/accountSettings" style={{textDecoration:"none",color:"inherit"}}>
          <div className="mobSettings">My Profile</div>
        </Link>
        <Link to="/businessProfile" style={{textDecoration:"none",color:"inherit"}}>
          <div className="mobBusiness">My Business Profile</div>
        </Link>
        <div className="mobLogout"> Logout</div>
        
        <div className="mobIntro" onClick={handelIntrows}>
          <div>
            <MdArrowDropDown size={23}/>
          </div>
          Introduction
        </div>
        
      </div>{
        
          intros && <div className="introws">
         <Link to='/contacts' style={{textDecoration:"none",color:"inherit"}}> <div className="contactspp">Contacts</div></Link>  
          <Link  to='/inbox' style={{textDecoration:"none",color:"inherit"}}><div className="inboxpp">Inbox</div></Link>  
           <Link to='/makeIntro' style={{textDecoration:"none",color:"inherit"}}><div className="intropp">Make Introduction</div></Link> 
           <Link to='/email' style={{textDecoration:"none",color:"inherit"}}><div className="emailpp">Emial Tempalte</div></Link> 
           <Link  to='/signature' style={{textDecoration:"none",color:"inherit"}}><div className="signaturepp">Signature</div></Link>
            </div>
        }
    </div>
  );
};

export default MobileNavbar;
