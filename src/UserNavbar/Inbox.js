import React, { useEffect } from "react";
import "./Inbox.css";
import "./NewInbox.css";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoIosStar, IoMdPerson } from "react-icons/io";
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
import { Link, useSearchParams } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import inboxData from "../components/Data/inboxData";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";

const Inbox = () => {
  const [intro, showIntro] = useState(false);
  const[serchParams,setSearchParams]=useSearchParams();
  const [settings, showSettings] = useState(false);
  const [data2, setData] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sentMessages, setSentMessages] = useState([]);
  const [replyFilter, setReplyFilter] = useState("");
const [messageFilter, setMessageFilter] = useState("");
  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get(
          " https://tracsdev.apttechsol.com/api/view-inbox-list-from-intro-api",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSentMessages(response.data.sentMails || []);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchMessages();
  }, []);
useEffect(() => {
  const params = {};
  if (replyFilter !== "") params.bump = replyFilter;
  if (messageFilter !== "") params.all_filter = messageFilter;
  setSearchParams(params);
}, [replyFilter, messageFilter]);
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
    <div className="mobMenuaa">
      <div className="mobMenu33">
        {showSidebar && (
          <div style={{ marginRight: "0px" }}>
            <MobileMenu />
          </div>
        )}
      </div>
      <div>
        {" "}
        <UserHeader />
        <div className="IBPPP">
          <div className="usernav">
            <SideNav />
          </div>
          <div className="IBPP">
            {" "}
            <MobileNavbar showMobnav={showMobnav} />
            <div className="d-header">
              <h2>Messages</h2>
            </div>
            <div className="inbox-container">
              <div className="messageInbox">
                <div className="mI1">
                  <p>Filter for Replies</p>
                  <select  value={replyFilter}
  onChange={(e) => setReplyFilter(e.target.value)}>
                    <option value="">All Replies</option>
                    <option value="1">No Replies(Bump)</option>
                    <option value="2">Closed</option>
                  </select>
                </div>
                <div className="mI2">
                  <p>Filter for Messages</p>
                  <select  value={messageFilter}
  onChange={(e) => setMessageFilter(e.target.value)}>
                    <option value="">All </option>
                    <option value="1">Intros Recived</option>
                    <option value="2">Intros Sent</option>
                  </select>
                </div>

                <div className="mI3">
                  <Link to="/makeIntro">
                    <button>Make Introduction</button>
                  </Link>{" "}
                </div>
              </div>

              <div className="collapseButton" style={{display:"flex",flexDirection:"column"}}>
                <div>
                  {" "}
                  <button onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Collapse all" : "Expand all"}
                  </button>
                </div>
                <div style={{ marginTop: "1px", marginLeft: "20px" }}>
                  <IoIosStar color=" #eeba2b" />= Take Action <button style={{background:"#dc3545"}}>Bump</button> = no replies
                </div>
              </div>

              <div className="inbox-holder">
                {sentMessages.filter((item) => {
   
    if (replyFilter === "1") {
       return item.is_bump !== 1;
    }
    
    if (replyFilter === "2") {
 return item.is_bump === 2;    }
    return true; 
  })
  .filter((item) => {
    // Message filter logic
    if (messageFilter === "received") {
      return item.type === "received"; // Assuming 'type' exists
    }
    if (messageFilter === "sent") {
      return item.type === "sent";
    }
    return true;
  }).map((item, index) => (
                  <div key={item.id} className="inbox">
                    <div classname="headingIntro">
                      <h3>{item.subject}</h3>
                    </div>
                    <div className="pictime">
                      <div className="pic55">
                        <div className="pic55img">< img  src={item.sender_full_image}/>
                        </div>
                        <div className="pic55name">
                          <p>{item.sender_full_name}</p>
                        </div>
                      </div>
                      <div className="time55">
                        <div className="time55Clock">
                          <FaClock />
                        </div>
                        <div className="time55days">
                          <p>{Math.floor((Date.now() - new Date(item.created_at)) / (1000 * 60 * 60 * 24))} days ago</p>
                        </div>
                       {item.recipients_info.some(recipient=>recipient.replied === false)&&( <div className="timeStar"><IoIosStar color="#eeba2b"/></div>)}
                      </div>
                    </div>
                    {isExpanded && (
                      <div>
                        <h3>To</h3>

                        {/* Sender(s) */}
                        {item.recipients_info.map((recipient, idx) => (
                          <Link to="/memberDetails">
                            <div key={idx} className="pic66">
                              <div className="pic66img">
                                <img
                                   src={`https://tracsdev.apttechsol.com/public/${recipient.profile_image} `|| "/default.jpg"}
                                 
                                />
                              </div>
                              <div className="pic66name">
                                <p>{recipient.name}</p>
                              </div>
                              <div className="pic66name">
                                <p>
                                 (Replies : {recipient.replied ? "Yes" : "No"})
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                        {item.sender?.contact && (
  <Link to="/contactDetails" style={{ color: "inherit" }}>
    <div className="contactInfo">
      <div className="contact-icon">
        <RiContactsBook3Line size={20} />
      </div>
      <div>
        <p>{item.sender.contact.join(", ")}</p>
      </div>
      <div style={{ marginLeft: "10px" }}>
        <p>
          (Replies :
          {item.sender.contactReply &&
            ` ${item.sender.contactReply.join(", ")}`}
          )
        </p>
      </div>
    </div>
  </Link>
)}
                        {/* Message */}
                        <div><h3>Message</h3></div>
                        <div style={{display:"flex"}}>
                          <div className="pic55img">< img src={item.sender_full_image} />
                        </div>
                         <div className="pic55name">
                          <p>{item.sender_full_name}</p>
                        </div></div>
                       <div className="time55" style={{marginLeft:"1px",marginTop:"-11px"}}>
                        <div className="time55Clock">
                          <FaClock />
                        </div>
                        <div className="time55days">
                          <p>{Math.floor((Date.now() - new Date(item.created_at)) / (1000 * 60 * 60 * 24))} days ago</p>
                        </div>
                      
                      </div>
                        <div className="message" style={{ display: "flex" }}>
                          
                          <div><h4 className="messh4">{item.body}</h4></div>
                          <div><Link to="/messageDetails">
                            <h4 style={{ marginLeft: "80px" }}>See More...</h4>
                          </Link></div>
                        </div>

                        {/* Reply & Bump Buttons */}
                        <div className="replyBump">
                          <Link to={`/replyMessage/${item.subject}/${item.user_id}/${item.replies_code}`}>
  <button style={{ background: "#163b6d" }}>Reply</button>
</Link>


                          <Link to={`/bumpMessage/${item.subject}/${item.user_id}/${item.replies_code}/bump=${item.is_bump}`}>   {item.can_bump && <button className="colorButton" style={{ background: "#dc3545" }}>Bump</button>} </Link>
      
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
