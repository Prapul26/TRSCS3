import axios from 'axios';
import React, { useEffect,useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UserHeader from "../components/UserHeader";
import SideNav from "./SideNav";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";

import { FaSortDown } from "react-icons/fa";
import { TiArrowBack, TiArrowBackOutline } from "react-icons/ti";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import { FaCircleQuestion } from 'react-icons/fa6';
const MessageDetails = () => {
  const [template, setTemplate] = useState(false);
  const [showReply, setReply] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { subject, user_id, replies_code, is_bump } = useParams();
  const [selectedMails, setSelectedMails] = useState(false);
  const [data, setData] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("Select Template");
  const [templateSearch, setTemplateSearch] = useState("");
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [showSignature, setShowSignature] = useState(true);
  const [showReplyBump, setReplyBump] = useState(false);
  const showMobnav = () => setShowSidebar(prev => !prev);
  const handleCheckboxChange = (e) => setShowSignature(e.target.checked);
  const handleSelectedMails = () => setSelectedMails(!selectedMails);
  const [sentMail, setSentMails] = useState([]);
    const [template1,setTemplate1]=useState([])
    
    const [signature, setSignature] = useState([]);
    const [popUp, setPopUp] = useState(false);
      const messageRef = useRef(null);
    
  const timestamp = sentMail?.created_at;
  const formatted = timestamp ? new Date(timestamp).toLocaleString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
  }) : "";

  const emailPreview = data.email_templates?.filter(template => template.id === selectedTemplateId);
  const onReplyClick = () => {
    setReplyBump(!showReplyBump)
  }
  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("authToken");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/view_user_inboxhistory_intro/${subject}/${user_id}/${replies_code}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setData(response.data);
        setSentMails(response.data.sentMails.data);
        setTemplate1(response.data.normal_email_templates)
         const sigValue = response.data.keyfields?.find(item => item.id === 4)?.description || "";
        setSignature(sigValue);
      } catch (err) {
        console.error("Error fetching inbox history:", err);
      }
    };
    fetchData();
  }, [subject, user_id, replies_code]);
const stripHtmlTags = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};
 const formatWithLineBreaks = (text) => {
    if (!text) return "";

    const parts = text.trim().split(/\s+/); // split on 1+ spaces

    const line1 = parts[0];                            // "Thanks"
    const line2 = parts.slice(1, 3).join(" ");         // "Santhosh Nelli"
    const line3 = parts[3];                            // "8374818142"
    const line4 = parts.slice(4).join(" ");            // "SKN IT Solutions"

    return `${line1}\n${line2}\n${line3}\n${line4}`;
  };
  const payload = {
    user_id: data.userInfo?.id,
    sent_mail_history_id: data.sentMailsfirst?.id,
    replies_code,
    temp_id: selectedTemplateId,
    subject: data.sentMailsfirst?.subject,
    selected_emails: selectedEmails,
    redirect_to: "https://tracsdev.apttechsol.com/user/view-inbox-list-from-intro",
    is_bump: data.sentMailsfirst?.is_bump,
    cc_mail_id: null,
    emails: selectedEmails,
    email_template: selectedTemplate,
   message: messageRef.current?.innerHTML || "",
    files: null
  };

  const handleSendReply = async () => {
    const token = sessionStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/sendReplyMailtomem_Api`,
        payload,
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
      );
      console.log("Mail Sent Successfully", response.data);
    } catch (error) {
      console.error("Error sending reply mail:", error);
    }
  };
 const adjustInnerHtml=(html)=>{
    const container=document.createElement("div");
    container.innerHTML=html;
    return container.innerHTML;
  }
    const navigate=useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page in history
  };
  return (
    <div className="mobMenuaa">
      <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
      <div>
        <UserHeader />
        <div className="mdppp">
          <div className="usernav"><SideNav /></div>
          <div className="mdpp">
            <MobileNavbar showMobnav={showMobnav} />
              <div style={{ marginLeft: "0px" }}>
                                  {" "}
                                  <button style={{ borderRadius: "30px", border: "transparent", background: "#163b6d" }} onClick={handleGoBack}>
                                    <span>
                        
                                      <TiArrowBack color="white" size={35} style={{ background: "#163b6d" }} />
                        
                                    </span>{" "}
                                  </button>
                                </div>
            <div className="d-header"><h2>Messages Details</h2></div>
            <div className="messageDetails-container">
              <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button style={{ background: "#163b6d" }} onClick={onReplyClick}>Reply</button>
                <button style={{ marginRight: "10px", background: "#dc3545" }} onClick={onReplyClick}>Bump</button>
              </div>

              {showReplyBump &&
                <div>
                  <div className="select-holder">
                    <div className="toHolder">
                      <h3>To</h3><br />
                      <div>
                        <div className="toMsg" onClick={handleSelectedMails}>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginLeft: "5px", marginTop: "7px", color: "blue" }}>
                            {selectedEmails.length === 0 ? (
                              <span>Select Emails</span>
                            ) : data.usersData?.filter(user => user.email !== data.userInfo?.email).every(user => selectedEmails.includes(user.email)) ? (
                              <span>All Selected ({selectedEmails.length})</span>
                            ) : (
                              data.usersData?.filter(user => selectedEmails.includes(user.email) && user.email !== data.userInfo?.email).map((user, index) => (
                                <div key={index} style={{ whiteSpace: "nowrap" }}>
                                  {user.name} ({user.email})
                                </div>
                              ))
                            )}
                          </div>
                          <div style={{ marginTop: "6px", marginRight: "4px" }}><FaSortDown /></div>
                        </div>
                        {selectedMails && (
                          <div className="Nmails">
                            {data.usersData?.map((user, index) => (
                              <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
                                <input
                                  type="checkbox"
                                  checked={selectedEmails.includes(user.email)}
                                  onChange={() => {
                                    if (selectedEmails.includes(user.email)) {
                                      setSelectedEmails(selectedEmails.filter(e => e !== user.email));
                                    } else {
                                      setSelectedEmails([...selectedEmails, user.email]);
                                    }
                                  }}
                                />
                                <div>
                                  <h4 style={{ margin: 0 }}>{user.name}</h4>
                                  <h4 style={{ margin: 0 }}>{user.email}</h4>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="templateHolder">
                      <div onClick={() => setTemplate(!template)}>
                        <h3>Email Template</h3><br />
                        <div className="emailTemplateInput">
                          <div style={{ marginTop: "9px", marginLeft: "5px" }}><h4>{selectedTemplate}</h4></div>
                          <div style={{ marginTop: "9px" }}><FaSortDown /></div>
                        </div>
                      </div>
                      {template && (
                        <div className="templateSetHolder">
                          <input
                            type="text"
                            placeholder="Search templates..."
                            value={templateSearch}
                            onChange={(e) => setTemplateSearch(e.target.value)}
                            style={{ width: "90%", height: "40px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px", padding: "5px" }}
                          />
                          <p style={{ marginLeft: "10px" }}>Select Template</p>
                           {template1
  ?.filter(t => t.template_name.toLowerCase().includes(templateSearch.toLowerCase()))
  .map((t) => (
    <div
      key={t.id}
      onClick={() => {
        setSelectedTemplate(t.template_name);
        setSelectedTemplateId(t.id);
        setTemplate(false); // close dropdown after selecting
      }}
      style={{ padding: "8px", cursor: "pointer", borderBottom: "1px solid #eee" }}
    >
      {t.template_name}
    </div>
  ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="messageRead">
                    <h3 style={{marginBottom:"20px"}}>Message:</h3>
                    <div className="text-Area"  contentEditable  ref={messageRef} >
                      <div className="tempBody">
                         {emailPreview?.map(template => (
                      <div style={{ margin: "10px", fontSize: '15px' }} key={template.id} dangerouslySetInnerHTML={{ __html: template.email_body }} />
                    ))}
                      </div>
                      {showSignature && (
                        <div className="signature" style={{ display: "flex", flexDirection: "column" }}>
                       <div style={{ whiteSpace: "pre-line" ,fontSize:'14.5px'}} className="sigter">
                        {formatWithLineBreaks(stripHtmlTags(data.authsignature?.name))}
                      </div>
                        </div>
                      )}
                    </div>
                  </div>
              {
                  popUp &&(<div className="sigPop" onMouseLeave={()=>setPopUp(false)}><div className="sispp" dangerouslySetInnerHTML={{ __html: adjustInnerHtml(signature) }} 
></div></div>)
                }
                  <div className="signature">
                    <div className="checkbox-container">
                      <input type="checkbox" id="include-signature" checked={showSignature} onChange={handleCheckboxChange} style={{ marginTop: "-5px" }} />
                      <div></div> <label htmlFor="include-signature" style={{ marginTop: "10px" }}>Include Signature</label>
                      <div style={{marginTop:"-10px",marginLeft:"5px",marginRight:"5px"}}></div> <FaCircleQuestion onMouseEnter={()=>setPopUp(true)} style={{ marginLeft: "5px", marginTop: "11px" }} />
                    </div>
                    <div className="button-container">
                      <button onClick={handleSendReply}>Send</button>
                    </div>
                  </div>
                </div>
              }

              <div className="messageHeader" >
                <div className="headerHeading">
                  <h3>Introduction - {data.usersData?.map((user) => user.name).join("& ")}</h3>

                </div> {sentMail?.map((mail, index) => {
  const formattedDate = new Date(mail.created_at).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className="hoverall" key={index}>
      <div className="MessageInDetail">
        <div className="messageDetails">
          <div className="mpicmname">
            <div className="mPic">
              <img src={`https://tracsdev.apttechsol.com/public/${data.userInfo?.image}`} />
            </div>
            <div className="mName">
              <h3>{data.userInfo?.name}</h3>
            </div>
          </div>
          <div className="mdate">
            <h3>{formattedDate}</h3>
          </div>
        </div>
        <div className="messageData">
          <p>{stripHtmlTags(mail.body)}</p>
        </div>
      </div>
    </div>
  );
})}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MessageDetails
