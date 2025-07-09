import React, { useEffect, useState } from "react";
import "./ReplyMessage.css";
import UserHeader from "../components/UserHeader";
import SideNav from "./SideNav";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import { Link, useParams } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";

const ReplyMessage = () => {
  const [template, setTemplate] = useState(false);
  const [showReply, setReply] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { subject, user_id, replies_code } = useParams();
  const [selectedMails, setSelectedMails] = useState(false);
  const [data, setData] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("Select Template");
  const [templateSearch, setTemplateSearch] = useState("");
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [showSignature, setShowSignature] = useState(true);
  const [sentMail, setSentMails] = useState([])
  const showMobnav = () => setShowSidebar(prev => !prev);
  const handleCheckboxChange = (e) => setShowSignature(e.target.checked);
  const handleSelectedMails = () => setSelectedMails(!selectedMails);

  const timestamp = data.userInfo?.created_at;
  const formatted = timestamp ? new Date(timestamp).toLocaleString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
  }) : "";

  const emailPreview = data.email_templates?.filter(template => template.id === selectedTemplateId);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/view_user_inboxhistory_intro/${subject}/${user_id}/${replies_code}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setData(response.data);
           setSentMails(response.data.sentMails.data)
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
    message: emailPreview?.[0]?.email_body || "testing purpose only",
    files: null
  };

  const handleSendReply = async () => {
    const token = localStorage.getItem("authToken");
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

  return (
    <div className="mobMenuaa">
      <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
      <div>
        <UserHeader />
        <div className="mdppp">
          <div className="usernav"><SideNav /></div>
          <div className="mdpp">
            <MobileNavbar showMobnav={showMobnav} />
            <div className="d-header"><h2>Messages Details</h2></div>
            <div className="messageDetails-container">
              <div className="select-holder">
                <div className="toHolder">
                  <h3>To</h3><br />
                  <div>
                    <div className="toMsg" onClick={handleSelectedMails}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginLeft: "5px" ,marginTop:"7px",color:"blue"}}>
                        {selectedEmails.length === 0 ? (
                          <span>Select Emails</span>
                        ) : data.usersData?.filter(user => user.email !== data.userInfo?.email).every(user => selectedEmails.includes(user.email)) ? (
                          <span>All Selected ({selectedEmails.length})</span>
                        ) : (
                          data.usersData?.filter(user => selectedEmails.includes(user.email) && user.email !== data.userInfo?.email).map((user, index) => (
                            <div key={index} style={{  whiteSpace: "nowrap" }}>
                              {user.name} ({user.email})
                            </div>
                          ))
                        )}
                      </div>
                      <div style={{marginTop:"6px",marginRight:"4px"}}><FaSortDown /></div>
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
                      <div style={{ marginTop: "9px",marginLeft:"5px" }}><h4>{selectedTemplate}</h4></div>
                      <div  style={{ marginTop: "9px" }}><FaSortDown /></div>
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
                      {data.email_templates?.filter(temp => temp.template_name.toLowerCase().includes(templateSearch.toLowerCase())).map(temp => (
                        <div
                          className="tempddd"
                          key={temp.id}
                          onClick={() => {
                            setSelectedTemplate(temp.template_name);
                            setSelectedTemplateId(temp.id);
                            setTemplate(false);
                            setTemplateSearch("");
                          }}
                        >
                          <p style={{ cursor: "pointer", padding: "5px 10px" }}>{temp.template_name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="messageRead">
                <h3>Message:</h3>
                <div className="text-Area">
                  <div className="tempBody">
                    {emailPreview?.map(template => (
                      <div key={template.id} dangerouslySetInnerHTML={{ __html: template.email_body }} />
                    ))}
                  </div>
                  {showSignature && (
                    <div className="signature" style={{ display: "flex", flexDirection: "column" }}>
                      <div>{data.userInfo?.name}</div>
                      <div>{data.userInfo?.phone}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="signature">
                <div className="checkbox-container">
                  <input type="checkbox" id="include-signature" checked={showSignature} onChange={handleCheckboxChange} style={{marginTop:"-5px"}}/>
                 <div></div> <label htmlFor="include-signature" style={{marginTop:"8px"}}>Include Signature</label>
                  <AiTwotoneQuestionCircle style={{ marginLeft: "5px", marginTop: "11px" }} />
                </div>
                <div className="button-container">
                  <button onClick={handleSendReply}>Send</button>
                </div>
              </div>
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
};

export default ReplyMessage;
