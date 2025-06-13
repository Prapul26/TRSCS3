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
  const [templateBody, setTemplateBody] = useState(""); // <-- new state
  const [selectedData, setSelectedData] = useState([]);
  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
  const timestamp = data.userInfo?.created_at; // example
const date = new Date(timestamp);

const formatted = date.toLocaleString('en-US', {
  month: 'long',   // "May"
  day: 'numeric',  // 29
  year: 'numeric', // 2025
  hour: 'numeric', // 11
  minute: '2-digit', // 13
  hour12: true     // AM/PM
});
  const handelTemplate = () => {
    setTemplate(!template);
  };
  const handelShowReply = () => {
    setReply(!showReply);
  };
    const [showSignature, setShowSignature] = useState(true);

  const handleCheckboxChange = (e) => {
    setShowSignature(e.target.checked);
  };
  const handleSelectedMails = () => {
    setSelectedMails(!selectedMails);
  };
  const handelSelectedData = (id) => {
    if (selectedData.includes(id)) {
      setSelectedData(selectedData.filter((item) => item !== id));
    } else {
      setSelectedData([...selectedData, id]);
    }
  };
  const message = data.data?.[0];
  const emailPreview = data.email_templates?.filter((template) =>
    selectedData?.includes(template.id)
  );
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get(
          `https://tracsdev.apttechsol.com/api/view_user_inboxhistory_intro/${subject}/${user_id}/${replies_code}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched data:", response.data);
        setData(response.data);
        // Set state here if needed
      } catch (err) {
        console.error("Error fetching inbox history:", err);
      }
    };

    fetchData();
  }, [subject, user_id, replies_code]);

const payload = {
  user_id: data.userInfo?.id, // e.g. 1898
  sent_mail_history_id: data.sentMailsfirst?.id, // e.g. 802
  replies_code, // from useParams()
  temp_id: null, // or use selectedData[0] if one template selected
  subject:  data.sentMailsfirst?.subject,
  selected_emails: data.usersData?.map(user => user.email),
  redirect_to: "https://tracsdev.apttechsol.com/user/view-inbox-list-from-intro",
  is_bump:  data.sentMailsfirst?.is_bump,
  cc_mail_id: null,
  emails: data.usersData?.map(user => user.email),
  email_template: selectedTemplate,
  message:  emailPreview?.[0]?.email_body || "testing purpose only",
  files: null
};
const handleSendReply = async () => {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.post(
      "https://tracsdev.apttechsol.com/api/sendReplyMailtomem_Api",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
    console.log("Mail Sent Successfully", response.data);
    // Optionally navigate or notify user
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
          <div className="usernav">
            <SideNav />
          </div>
          <div className="mdpp">
            <MobileNavbar showMobnav={showMobnav} />
            <div className="d-header">
              <h2>Messages Details</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ marginLeft: "20px" }}>
                {" "}
                <button style={{ borderRadius: "30px", border: "transparent" }}>
                  <span>
                    <Link to="/inbox">
                      <TiArrowBackOutline color="white" size={35} />
                    </Link>
                  </span>{" "}
                </button>
              </div>

              <div style={{ marginRight: "20px", marginTop: "10px" }}></div>
            </div>
            <div className="messageDetails-container">
              <div>
                <div className="select-holder">
                  <div className="toHolder">
                    <h3>To</h3>
                    <br />
                    <div>
                      <div className="toMsg" onClick={handleSelectedMails}>
                        <div>
                          <h4 style={{ marginTop: "5px", marginLeft: "5px" }}>
                            Select Emails
                          </h4>
                        </div>
                        <div>
                          {" "}
                          <FaSortDown />
                        </div>
                      </div>
                    {selectedMails && data.usersData?.map((user, index) => (
  <div className="Nmails" key={index}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <input type="checkbox" />
      </div>
      <div><h4>{user.name}({user.email})</h4></div>
      <div>
        <p></p>
      </div>
    </div>
  </div>
))}

                    </div>
                  </div>
                  <div className="templateHolder">
                    <div onClick={handelTemplate}>
                      <h3>Email Template</h3>
                      <br />
                      <div className="emailTemplateInput">
                        <div style={{ marginTop: "5px" }}>
                          <h4>{selectedTemplate}</h4>
                        </div>
                        <div>
                          <FaSortDown />
                        </div>
                      </div>
                    </div>
                    {template && (
                      <div className="templateSetHolder">
                        <div> </div>
                        <div></div>
                        {data.email_templates?.map((temp) => (
                          <div
                            key={temp.id}
                            onClick={() => {
                              setSelectedTemplate(temp.template_name);
                              handelSelectedData(temp.id);
                              setTemplate(false);
                            }}
                          >
                            <p style={{ cursor: "pointer" }}>
                              {temp.template_name}
                            </p>
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
                      {emailPreview?.map((template) => (
                        <div
                          key={template.id}
                          dangerouslySetInnerHTML={{
                            __html: template.email_body,
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ marginTop: "180px" }}>
                      <p></p>
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
                  <div class="checkbox-container">
                    <div>
                      {" "}
                      <input type="checkbox" id="include-signature"   checked={showSignature}
            onChange={handleCheckboxChange} />
                    </div>
                    <div>
                      {" "}
                      <label for="include-signature">Include Signature</label>
                    </div>
                    <div style={{ marginLeft: "5px", marginTop: "3px" }}>
                      <AiTwotoneQuestionCircle />
                    </div>
                  </div>
                  <div class="button-container">
<button onClick={handleSendReply}>Send</button>                  </div>
                </div>
              </div>

              <div className="messageHeader">
                <div className="headerHeading">
                 <h3>Introduction - {data.usersData?.map((user) => user.name).join("& ")}</h3>
            
                </div>
                <div className="hoverall">
                  <div className="MessageInDetail">
                    <div className="messageDetails">
                      <div className="mpicmname">
                        <div className="mPic">
                          <img src={`https://tracsdev.apttechsol.com/public/${data.userInfo?.image}`} />
                        </div>
                        <div className="mName">
                          <h2>{data.userInfo?.name}</h2>
                        </div>
                      </div>
                      <div className="mdate">
                        <h3>{formatted} </h3>
                      </div>
                    </div>
                    <div className="messageData">
                      <p>{data?.sentMailsfirst?.body}</p>
                      <div className="signature2" style={{display:"flex",flexDirection:"column"}}>
                    <div>{data.userInfo?.name}</div>
                    <div>{data.userInfo?.phone}</div>
                    </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyMessage;
