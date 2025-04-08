import React from "react";
import "./Inbox.css";
import "./NewInbox.css";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import UserHeader from "../components/UserHeader";
import { FaClock, FaFileSignature } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdArrowCircleDown, MdOutlineCardMembership } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoExpandSharp } from "react-icons/io5";

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
import inboxData from "../components/Data/inboxData";
const Inbox = () => {
  const [intro, showIntro] = useState(false);
  const [settings, showSettings] = useState(false);
  const [data2, setData] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const handelExpand = () => {
    setData(!data2);
  };
  const handelSettings = () => {
    showSettings(!settings);
  };
  const handelIntro = () => {
    showIntro(!intro);
  };
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle function for expanding the clicked item
  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div >
      {" "}
      <UserHeader />
      <div className="IBPPP">
        <div className="usernav">
          <SideNav />
        </div>
        <div className="IBPP">
          {" "}
          <MobileNavbar />
          <div className="d-header" >
            <h2>Messages</h2>
            
          </div>
          
          <div className="inbox-container">
            <div className="messageInbox">
              <div className="mI1">
                <p>Filter for Replies</p>
                <select>
                  <option value="allReplies">All Replies</option>
                  <option value="noReplies">No Replies(Bump)</option>
                </select>
              </div>
              <div className="mI2">
                <p>Filter for Messages</p>
                <select>
                  <option value="allReplies">All </option>
                  <option value="noReplies">Intros Recived</option>
                  <option value="noReplies">Intros Sent</option>
                </select>
              </div>

              <div className="mI3">
                <Link to="/makeIntro">
                  <button>Make Introduction</button>
                </Link>{" "}
              </div>
             
            </div>
            <div className="collapseButton">  <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Collapse all" : "Expand all"}
      </button></div>

            <div className="inbox-holder">
             {inboxData.map((item,index)=>(<div key={index} className="inbox">
              <div classname="headingIntro">
                <h3>{item.introduction}</h3>
              </div>
              <div className="pictime">
                <div className="pic55">
                  <div className="pic55img"><img src={item.recipientImg}/></div>
                  <div className="pic55name"><p>{item.recipient}</p></div>
                </div>
                <div className="time55">
                  <div className="time55Clock"><FaClock /></div>
                  <div className="time55days"><p>{item.date} days ago</p></div>
                </div>
              </div>
              {isExpanded && (
        <div>
          <h3>To</h3>

          {/* Sender(s) */}
          {item.sender.name.map((senderName, senderIndex) => (
            <Link to='/memberDetails'><div key={senderIndex} className="pic66">
              <div className="pic66img">
                <img src={item.sender.namePic[senderIndex]} alt={senderName} />
              </div>
              <div className="pic66name">
                <p>{senderName}</p>
              </div>
              <div className="pic66name">
                <p>( Replies : {item.sender.replies[senderIndex]} )</p>
              </div>
            </div></Link>
          ))}
 {item.sender.contact && (
                    <Link to='/contactDetails' style={{color:"inherit"}}>    <div className="contactInfo">
                          
                         <div className="contact-icon"> <RiContactsBook3Line size={20}/></div>
                         <div><p>{item.sender.contact.join(", ")}</p></div> 
                         <div style={{marginLeft:"10px"}}><p> (Replies :  {item.sender.contactReply && ` ${item.sender.contactReply.join(", ")}`})</p></div>
                        </div></Link>
                      )}
          {/* Message */}
          <div className="message" style={{display:"flex"}}>
            <h4>{item.message}</h4><Link to='/messageDetails'><h4 style={{marginLeft:"40px"}}>See More...</h4></Link>
          </div>

          {/* Reply & Bump Buttons */}
          <div className="replyBump">
                       <Link to="/messageDetails"> <button>{item.sender.button}</button></Link>
                        <button className="colorButton">{item.sender.button2}</button>
                      </div>
        </div>
      )}
              </div>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
