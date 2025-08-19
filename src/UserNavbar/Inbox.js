import React, { useEffect } from "react";
import "./Inbox.css";
import "./NewInbox.css";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoIosInformationCircle, IoIosStar, IoMdPerson } from "react-icons/io";
import UserHeader from "../components/UserHeader";
import { FaAngleUp, FaClock, FaFileSignature, FaWindowMinimize } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdArrowCircleDown, MdOutlineCardMembership } from "react-icons/md";
import { FaBriefcase, FaCircleQuestion } from "react-icons/fa6";

import { ImCross, ImProfile } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

import { FaAngleDown } from "react-icons/fa";

import { Link, useSearchParams } from "react-router-dom";

import { useState } from "react";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";


const Inbox = () => {
  
  const [intro, showIntro] = useState(false);
  const [serchParams, setSearchParams] = useSearchParams();
  const [settings, showSettings] = useState(false);
  const [data2, setData] = useState(false);
  const [isExpanded, setIsExpanded] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sentMessages, setSentMessages] = useState([]);
  const [showkeyfeilds, setKeyfeilds] = useState([]);
  const [replyFilter, setReplyFilter] = useState("");
  const [messageFilter, setMessageFilter] = useState("");
  const [showFilterReplie, setFilterReplie] = useState(false);
  const [showFilterMessage, setFilterMessage] = useState(false);
  const [showTakeAction, setTakeAction] = useState(false)
  const [showButton, setButton] = useState(false);
  const [showpage, setShowPage] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const[showExpandedMessage,SetExpandedMessage]=useState(false);
  const handleExpandedMessage=()=>{
    SetExpandedMessage((prev)=>!prev)
  }
  const urlClick = () => {
    setShowPage(!showpage)
  }
  const closeURlCLick = () => {
    setShowPage(false)
  }

  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
  useEffect(() => {
    const fetchMessages = async () => {
      const token = sessionStorage.getItem("authToken");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/view-inbox-list-from-intro-api`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSentMessages(response.data.sentMails || []);
        setKeyfeilds(response.data.keyfields || [])
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchMessages();
  }, []);
  console.log("API BASE URL", process.env.REACT_APP_API_BASE_URL);
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
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };
  const rawHtml = showkeyfeilds.find(item => item.id === 8)?.description || "";

  // Create a container element and parse the HTML
  const container = document.createElement("div");
  container.innerHTML = rawHtml;

  // Target all <p> tags and change color of inner text and nested elements
  const paragraphs = container.querySelectorAll("p");
  paragraphs.forEach(p => {
    p.style.color = "white";

    // Also update inline color styles in child elements
    const descendants = p.querySelectorAll("*");
    descendants.forEach(el => {
      el.style.color = "white";
    });
  });


  const sanitizedHtml = container.innerHTML;

  const rawHtml2 = showkeyfeilds.find(item => item.id === 8)?.description || "";

  // Create a container element and parse the HTML
  const container2 = document.createElement("div");
  container.innerHTML = rawHtml2;

  // Target all <p> tags and change color of inner text and nested elements
  const paragraphs2 = container2.querySelectorAll("p");
  paragraphs2.forEach(p => {
    p.style.color = "white";

    // Also update inline color styles in child elements
    const descendants = p.querySelectorAll("*");
    descendants.forEach(el => {
      el.style.color = "white";
    });
  });


  const sanitizedHtml2 = container2.innerHTML;

const toggleExpand = (id) => {
  setExpandedId(prevId => (prevId === id ? null : id));
};
  return (
    <div>
      {
        showpage && (
          <div className="pageURLContainer">
            <div className="pageURLHolder" >
              <div className="pageURLHeader">
                <div><h4 style={{ color: "white" }} >Your Conversation with members</h4></div>
               
                <div onClick={closeURlCLick} style={{ marginTop: "9px" }}> <ImCross /></div>
              </div>
              <div className="pageiframeContainer">
                <div className="pageIframe"><iframe src="https://tracsdev.apttechsol.com/helpsection-descriptionnew/14" /></div>

              </div>
            </div>
          </div>
        )
      }
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
                <div style={{ display: "flex" }} className="urlPage" onClick={urlClick}><div><h3 className="conversation-title" >Your conversations with members </h3></div>
                  <div style={{ marginTop: "-15px", marginLeft: "5px" }}><IoIosInformationCircle size={15} /></div>
                </div>
              </div>

              <div className="inbox-container">
                <div className="messageInbox">
                  <div className="mI1">

                    <div style={{ display: "flex", marginTop: "20px", marginBottom: "10px" }}><div><h4 style={{ color: "black", fontSize: "18px" }}>Filter for Replies</h4></div><div style={{ marginTop: "2px", marginLeft: "5px" }} onMouseEnter={() => setFilterReplie(true)} onMouseLeave={() => setFilterReplie(false)} >  {showFilterReplie && (<div className="showfilter1" >
                      <p>{showkeyfeilds.find(kf => kf.id === 2)?.description}</p>
                    </div>)}<FaCircleQuestion />
                    </div></div>
                    <select value={replyFilter}
                      onChange={(e) => setReplyFilter(e.target.value)}>
                      <option value="">All Replies</option>
                      <option value="1">No Replies(Bump)</option>
                      <option value="2">Closed</option>
                    </select>
                  </div>
                  <div className="mI2">
                    <div style={{ display: "flex", marginTop: "20px", marginBottom: "10px" }}><div><h4 style={{ color: "black", fontSize: "18px" }}>Filter for Messages</h4></div><div style={{ marginTop: "2px", marginLeft: "5px" }} onMouseEnter={() => setFilterMessage(true)} onMouseLeave={() => setFilterMessage(false)} >  {showFilterMessage && (<div className="showfilter2" >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: showkeyfeilds.find(item => item.id === 5)?.description || "",
                        }}
                      ></div>
                    </div>)}<FaCircleQuestion />
                    </div></div>
                    <select value={messageFilter}
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

                <div className="collapseButton" style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    {" "}
                    <button className="collapseButton-button" style={{ background: "#163b6d !important" }} onClick={() => setIsExpanded(prev => !prev)}>
                      {isExpanded ? "Collapse all" : "Expand all"}
                    </button>
                  </div>
                  <div style={{ marginTop: "1px", marginLeft: "20px" }}  >{showTakeAction && (<div className="takeAction1">   <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizedHtml,
                    }}
                  ></div></div>)}{showButton && (<div className="showButton"> <div className="showButtonp"
                    dangerouslySetInnerHTML={{
                      __html: showkeyfeilds.find(item => item.id === 7)?.description || "",
                    }}
                  ></div></div>)}
                     <p className="pppawda" style={{display:"flex"}}> <IoIosStar color=" #eeba2b" />= Take Action<div style={{marginLeft:"6px",marginRight:"6px",marginTop:"2px"}}><FaCircleQuestion  onMouseEnter={() => setTakeAction(true)} onMouseLeave={() => setTakeAction(false)} color="black" /></div><div style={{marginTop:'-20px',marginRight:"5px"}}><p>,</p></div> <div style={{marginTop:"-10px",marginRight:"6px"}}>  <button className="closss" style={{ background: "#dc3545 !important", padding: "5px 7px 5px 7px " }}>Bump</button></div>  = no replies <div style={{marginTop:"2px",marginLeft:"6px"}}><FaCircleQuestion  onMouseEnter={() => setButton(true)} onMouseLeave={() => setButton(false)} /></div>
                    </p>  </div>
                </div>

                <div className="inbox-holder">
                  {sentMessages.filter((item) => {

                    if (replyFilter === "1") {
                      return item.is_bump !== 1;
                    }

                    if (replyFilter === "2") {
                      return item.is_bump === 2;
                    }
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
                        <div classname="headingContainer" style={{display:"flex",justifyContent:"space-between"}}>
                        <div classname="headingIntro">
                          <h5 style={{ fontSize: "16px", fontWeight: "600", marginTop: "-0px" }}>{item.subject}</h5>
                        </div>
<div onClick={() => toggleExpand(item.id)}>
  {expandedId === item.id ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
</div>                  </div>
                        <div className="pictime">
                          <div className="pic55">
                            <div className="pic55img">< img src={item.sender_full_image} />
                            </div>
                            <div className="pic55name">
                              <p style={{ fontSize: "14px !important" }}>{item.sender_full_name}</p>
                            </div>
                          </div>
                          <div className="time55">
                            <div className="time55Clock">
                              <FaClock />
                            </div>
                            <div className="time55days">
                              <p>{Math.floor((Date.now() - new Date(item.created_at)) / (1000 * 60 * 60 * 24))} days ago</p>
                            </div>
                            {item.recipients_info.some(recipient => recipient.replied === false) && (<div className="timeStar" style={{ marginTop: "-0px" }}><IoIosStar color="#eeba2b" /></div>)}
                          </div>
                        </div>
                        {(isExpanded || expandedId === item.id) && (
                          <div style={{ marginTop: "-16px" }}>
                            <h5 style={{ fontSize: "17px", fontWeight: "700" }}>Introducing</h5>

                            {/* Sender(s) */}
                            {item.recipients_info.map((recipient, idx) => (
                              <Link style={{ textDecoration: "none" }} to={`/memberDetails/${recipient.user_id}/${recipient.member_type}`}>
                                <div key={idx} className="pic66">
                                  <div className="pic66img">
                                    <img
                                      src={`https://tracsdev.apttechsol.com/public/${recipient.profile_image} ` || "/default.jpg"}

                                    />
                                  </div>
                                  <div className="pic66name">
                                    <p style={{ textDecoration: "underline",color:"black",fontWeight:"500" }}>{recipient.name}</p>
                                  </div>
                                  <div className="pic66name">
                                    <p  style={{fontWeight:"500"}}>
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
                            <div style={{ marginTop: "-24px" }}><h5 style={{ fontSize: "16px", fontWeight: "700" }}>Message</h5></div>
                            <div style={{ display: "flex", marginTop: "-10px" }}>
                              <div style={{ display: "flex" }}>
                                <div className="pic55img">< img src={item.sender_full_image} />
                                </div>
                                <div className="pic55name">
                                  <p>{item.sender_full_name}</p>
                                </div></div>
                              <div className="time55" style={{ marginLeft: "15px", marginTop: "-0px" }}>
                                <div className="time55Clock">
                                  <FaClock />
                                </div>
                                <div className="time55days">
                                  <p style={{ fontSize: "14px !important" }}>{Math.floor((Date.now() - new Date(item.created_at)) / (1000 * 60 * 60 * 24))} days ago</p>
                                </div>

                              </div></div>
                           <div className="message" style={{ display: "flex", marginTop: "-10px" }}>
  {/* Show messh4 only when NOT expanded */}
  {!showExpandedMessage && (
    <div>
      <p className="messh4">{stripHtmlTags(item.body)}</p>
    </div>
  )}

  {/* Show expanded message only when expanded */}
  {showExpandedMessage && (
    <div className="expandedMessage">{stripHtmlTags(item.body)}</div>
  )}

  <div>
    <p
      className="plr"
      style={{ marginLeft: "80px", color: "rgba(23, 109, 240, 1)", cursor: "pointer" }}
      onClick={handleExpandedMessage}
    >
     {showExpandedMessage?<FaAngleUp size={17}/>:<FaAngleDown  size={17} />} 
    </p>
  </div>
</div>


                            {/* Reply & Bump Buttons */}
                            <div className="replyBump" style={{ marginTop: "-6px" }}>
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
      </div></div>
  );
};

export default Inbox;
