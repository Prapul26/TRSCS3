import React, { useEffect, useRef } from "react";
import "./MakeIntroduction.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCall, IoGlobe, IoLogoLinkedin, IoMail, IoPerson } from "react-icons/io5";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { IoMdPerson } from "react-icons/io";
import { FaAddressCard, FaPlus } from "react-icons/fa";
import Header from "../components/Heaader/Header";
import Navbar from "../components/Navbar/Navbar";
import { ImCross } from "react-icons/im";
import Footer from "../components/Footer/Footer";
import { TiArrowBack, TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";
import { PiMouseScrollFill } from "react-icons/pi";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { FaCircleQuestion } from "react-icons/fa6";

const MakeIntroduction = () => {
  const templates = {
    "Admin Intoduction Template 02 Apr": `Hi [[member_first_name]]
  
  I'd like to introduce you to [[contact_first_name]], a friend of mine who I think you'd enjoy connecting with. [[contact_first_name]] is expertise in graphic designer, works in marketing.
  
  I've cc'd [[contact_first_name]] on this email so you can connect directly.
  
  Thanks
  
  Santhosh Nelli
  
  8374818142
  
  SKN IT Solutions`,
  };
  const [users] = useState([

  ]);
  const blockedDomains = ["gmail.com", "yahoo.com", "hotmail.com"];
  const [msg, setMsg] = useState("");
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [subject, setSubject] = useState("");
  const [addContacts, showAdd] = useState(false);
  const [recepientType, setRecipientType] = useState("h7_members");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [message, setMessage] = useState("");
  const [ggText, setGGText] = useState("")
  const [messagebody, setmessageBody] = useState("")
  // New state
  const[keyFeilds,setKeyFeilds]=useState([])

  const [data, setData] = useState({});
  const [signature, setSignature] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [groupName, setGroupName] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bestPractice, setBestPractise] = useState(false);
  const [validationError, setValidationError] = useState("");
    const [includeSignature, setIncludeSignature] = useState(false);
      const [showTakeAction, setTakeAction] = useState(false)
           const [showTakeAction2, setTakeAction2] = useState(false);
             const [showTakeAction3, setTakeAction3] = useState(false)
    const field1 = keyFeilds.find(item => item.id === 1)?.description;
        const field2 = keyFeilds.find(item => item.id === 9)?.description;
            const field3 = keyFeilds.find(item => item.id === 4)?.description;
            const field4 = keyFeilds.find(item => item.id === 6)?.description;


 const adjustInternalhtml = (html) => {
  const container = document.createElement("div");
  container.innerHTML = html;
  return container.innerHTML;
};
  const navigate = useNavigate();
  const handelbest = () => {
    setBestPractise(!bestPractice)
  };

  function stripHtml(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };
  const handleToggle = (user) => {
    const selected = selectedEmails.find((item) => item.email === user.email);
    if (selected) {
      setSelectedEmails((prevSelected) =>
        prevSelected.filter((item) => item.email !== user.email)
      );
    } else {
      const imageUrl = user.image
        ? `https://tracsdev.apttechsol.com/public/${user.image}`
        : user.photo || ""; // Fallback to local photo

      setSelectedEmails((prevSelected) => [
        ...prevSelected,
        {
          ...user,
          image: imageUrl, // Ensure image is always available
        },
      ]);
    }
  };

  const handelbestcancel = () => {
    setBestPractise(!bestPractice)
  }
  const handleRemove = (email) => {
    setSelectedEmails((prevSelected) =>
      prevSelected.filter((item) => item.email !== email)
    );
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const handlePlus = () => {
    showAdd(!addContacts);
  };
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page in history
  };
  const handelcross = () => {
    showAdd(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");

    const validEmails = selectedEmails.filter((user) => {
      const domain = user.email.split("@")[1];
      return user.email.includes("@");
    });

    if (validEmails.length < 2) {
      setMsg("Select at least two emails.");
      return;
    }

    // ❗ Check if tokens are still present
    if (message.includes("[[name_1]]") || message.includes("[[name_2]]")) {
      setMsg(
        "Replace the following tokens with the value(s) including brackets:\n[[name_1]]\n[[name_2]]"
      );
      return;
    }

    // Extract first two selected users
    const [member, contact] = validEmails;

    // Replace additional placeholders (if any)
    const finalMessage = ggText
      .replace(/\[\[member_first_name\]\]/gi, member.name.split(" ")[0])
      .replace(/\[\[contact_first_name\]\]/gi, contact.name.split(" ")[0]);

    try {
      const formData = new FormData();
      formData.append("message", finalMessage);
      formData.append("recipient_type", recepientType);
      formData.append("subject", subject);
      formData.append("template_id", selectedTemplate);
      formData.append("signature", signature);
      validEmails.forEach((user) => {
        formData.append("mail_id[]", user.email);
      });

      const response = await axios.post(
        "https://tracsdev.apttechsol.com/api/sendmailintrotointromem",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMsg(response.data?.message || "Introduction sent successfully.");
      console.log("Success:", response.data);
    } catch (err) {
      setMsg(err.response?.data?.message || "An error occurred.");
    }
  };



  const handleChangeSequence = () => {
    setSelectedEmails((prev) => [...prev].reverse()); // or shuffle logic
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/sendmailintro/introduction_email`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Image URL:", data.partners?.image);
        setData(response.data);
        setKeyFeilds(response.data.keyfields || [])
        console.log(response.data);

      } catch (err) {
        setMsg(err.response?.data?.message || "Something went wrong.");
      }
    };

    fetchData();
  }, []);
  const adjustinternalHTML = (html) => {
    const container = document.createElement("div");
    container.innerHTML = html;
    return container.html;
  }

  const handleAddContact = async (e) => {
    const token = sessionStorage.getItem("authToken");
    if (!firstName || !lastName || !email || !groupName) {
      setMessage("Please fill in all required fields.");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/contact_store_form`,
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          group_name: groupName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Contact added successfully!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding the Contact");
    }
  };
  useEffect(() => {
    if (selectedEmails.length > 0 && data?.userInfo?.name) {
      const businessNames = selectedEmails
        .map((user) => user.name)
        .filter(Boolean)
        .join("  &  ");

      const userName = data.userInfo.name;

      setSubject(`Introduction : ${userName} <> ${businessNames}`);
    } else {
      setSubject("");
    }
  }, [selectedEmails, data?.userInfo]);

  const adjustInternalHtml = (html) => {
    const container = document.createElement("div");
    container.innerHTML = html;
    return container.innerHTML;
  };

const hideTimeoutRef = useRef(null); // ✅ persist timeout between renders

  const handleMouseEnter = () => {
    clearTimeout(hideTimeoutRef.current); // ✅ cancel pending hide
    setTakeAction(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setTakeAction3(false);
    }, 3000); // ✅ delay hiding for 3 seconds
  };

  return (
    <div className="make">
      <Header />
      <Navbar />
      <div className="crub">
        <h1 style={{ color: "white" }}>Make Introduction</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          {" "}
          <button style={{ borderRadius: "30px", border: "transparent", background: "#163b6d" }} onClick={handleGoBack}>
            <span>

              <TiArrowBack color="white" size={35} style={{ background: "#163b6d" }} />

            </span>{" "}
          </button>
        </div>
        <div className="prevIntro">
          <Link to="/inbox">
            {" "}
            <button className="PrevIntrobutton"> Previous Introductions</button>
          </Link>
        </div>
      </div>

      <div className="info-holder">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {
              showTakeAction && <div style={{marginTop:"-70px",width:"250px",borderRadius:"10px",opacity:"0.9",padding:"10px",height:"50px",background:"black",color:"white"}}><div dangerouslySetInnerHTML={{ __html: adjustInternalhtml(field1 || "") }} onMouseLeave={()=>setTakeAction(false)} /></div>
            }
            <div style={{ display: "flex" }}><div><label>Directory</label></div><div style={{ marginLeft: "5px", marginTop: "2px" }} onMouseEnter={handleMouseEnter} ><FaCircleQuestion /></div></div>
            <br />
            <select
              className="toSelect"
              value={recepientType}
              onChange={(e) => setRecipientType(e.target.value)}
            >

              <option value="h7_members">H7 Members</option>
              <option value="tracs_members">TRACS Members</option>
              <option value="contacts">My Contact</option>
            </select>
          </div>

          <div className="form-group">
            <label>Who would you like to send email to</label> <br />
            <div style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="searchInput"
              />{" "}
              {recepientType === "contacts" && (
                <div
                  className="addbuttoncontacts"
                  style={{ marginTop: "18px", marginLeft: "25px" }}
                  onClick={handlePlus}
                >
                  <FaPlus color="green" size={25} />
                </div>
              )}
            </div>
            {addContacts && (
              <form onSubmit={handleAddContact}>
                <div className="addContacts">
                  <div
                    style={{
                      padding: "20px",
                      borderBottom: "1px solid black",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3>Add New Contact</h3>
                    </div>
                    <div onClick={handelcross}>
                      <RxCross2 size={20} />
                    </div>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h3>First Name</h3>
                    <input
                      style={{ width: "100%", marginTop: "10px" }}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h3>last Name</h3>
                    <input
                      style={{ width: "100%", marginTop: "10px" }}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h3>Email </h3>
                    <input
                      style={{ width: "100%", marginTop: "10px" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h3>Group Name </h3>
                    <input
                      style={{ width: "100%", marginTop: "10px" }}
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                  </div>
                  <div style={{ display: "flex", padding: "20px" }}>
                    <button style={{ background: "grey" }}>cancel</button>
                    <button
                      style={{ background: "orange", marginLeft: "20px" }}
                      type="submit"
                    >
                      SAVE CONTACT
                    </button>
                  </div>
                </div>
              </form>
            )}
            {showModal && selectedUser && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div><h3>{selectedUser.name}</h3></div>
                    <div> <button style={{ background: "white", color: "black", fontSize: "25px", marginTop: "-10px" }} className="close-button" onClick={() => setShowModal(false)}>×</button></div>
                  </div>
                  <div className="instyleprofile">
                    <div>


                      <div style={{ justifyContent: "center", display: "flex", width: "100%" }}>
                        <img
                          src={
                            selectedUser?.image && selectedUser.image !== "null" && selectedUser.image !== ""
                              ? `https://tracsdev.apttechsol.com/public/${selectedUser.image}`
                              : "https://tracsdev.apttechsol.com/public/uploads/user_avatar.jpeg"
                          }
                          alt="User"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://tracsdev.apttechsol.com/public/uploads/user_avatar.jpeg";
                          }}
                          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                        />
                      </div>



                      <div style={{ justifyContent: "center", display: "flex", width: "100%" }}><h2>{selectedUser.name}</h2></div>
                      <div style={{ justifyContent: "center", display: "flex", width: "100%", marginTop: "-10px !important" }}><p style={{ marginTop: "-10px !important" }}> {selectedUser.member_type === "1"
                        ? "H7 Member"
                        : selectedUser.member_type === "2"
                          ? "TRACS Member"
                          : selectedUser.member_type === "3"
                            ? "My Contacts"
                            : "Unknown"}</p></div>
                      <div style={{ justifyContent: "center", display: "flex", width: "100%" }}><p>{selectedUser.business_name}</p></div>


                      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <div> <div className="prodet" style={{ display: "flex" }}>
                          <div style={{ display: "flex" }}>
                            <div style={{ marginRight: "10px" }}><IoMail size={20} color="#0089f8" /></div>
                            <div><strong>Email</strong><br />
                              <p>{selectedUser.email}</p></div>

                          </div>
                          <div style={{ display: "flex" }}>
                            <div style={{ marginRight: "10px" }}><IoCall size={20} color="green" /></div>
                            <div><strong>Phone</strong><br />
                              <p>{selectedUser.phone}</p></div>

                          </div>
                        </div>
                          <div className="prodet" style={{ display: "flex" }}>
                            <div style={{ display: "flex" }}>
                              <div style={{ marginRight: "10px" }}><IoGlobe size={20} color="#34b5b0" /></div>
                              <div><strong>Website</strong><br />
                                <p>{selectedUser.website}</p></div>

                            </div>
                            <div style={{ display: "flex" }}>
                              <div style={{ marginRight: "10px" }}><IoLogoLinkedin size={20} color="skyblue" /></div>
                              <div><strong>LinkedIn</strong><br />
                                <p>{selectedUser.linkedin}</p></div>

                            </div>
                          </div></div>
                      </div>

                      <div><strong>About</strong>
                        <div className='colorforabout' style={{ marginBottom: "40px", padding: "10px", overflowY: "auto" }} >
                          <div dangerouslySetInnerHTML={{ __html: adjustInternalHtml(selectedUser.about) }}
                          ></div>
                        </div>
                      </div>
                    </div></div></div>
              </div>
            )}
            <div className="checkbox-list" >
              {data.userslist
                ?.filter((user) => {
                  const searchMatch = user.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                    user.email?.toLowerCase().includes(searchText.toLowerCase());

                  // If no recipient type selected yet, show all users
                  if (!recepientType) return searchMatch;

                  // Filter based on selected type
                  const recipientMatch =
                    (recepientType === "h7_members" && user.member_type === "1") ||
                    (recepientType === "tracs_members" && user.member_type === "2") ||
                    (recepientType === "contacts" && user.member_type === "3");

                  return searchMatch && recipientMatch;
                })
                .map((user, index) => (
                  <div key={user.id} className="checkbox-item" >

                    <input
                      type="checkbox"
                      checked={selectedEmails.some((u) => u.email === user.email)}
                      onChange={() =>
                        handleToggle(user)
                      }
                    />
                    <span className="spandiv" onClick={() => {
                      setSelectedUser(user);
                      setShowModal(true);
                    }}>
                      <div className="spanImg">
                        <img
                          src={
                            user?.image && user.image !== "null" && user.image !== ""
                              ? `https://tracsdev.apttechsol.com/public/${user.image}`
                              : "https://tracsdev.apttechsol.com/public/uploads/user_avatar.jpeg"
                          }
                          alt="User"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://tracsdev.apttechsol.com/public/uploads/user_avatar.jpeg";
                          }}
                        />

                      </div>
                      <div style={{ marginTop: "-8px" }} className="spamData">
                        <h3>{user.name || "No Network"}</h3>
                        <div>
                          <div style={{ display: "flex" }}>
                            <div style={{ marginTop: "3px", marginRight: "5px" }}>

                              <IoMail />
                            </div>
                            <div>
                              <h4>{user.email}</h4>
                            </div>
                          </div>
                          <div style={{ display: "flex" }}>
                            <div style={{ marginTop: "0px", marginRight: "5px" }}>

                              <FaAddressCard />
                            </div>
                            <div className="emailSpan">
                             <h4>{user?.listings?.[0]?.title || "No business name"}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className="selected-emails">
            <h4>Selected Emails</h4>
            <div className="colorCOrner1">
              {selectedEmails.map((user, index) => (

                <div className="colorCOrner">
                  <div className="movecorner">
                    <div key={index} className="email-item">
                      <div className="selected-user-photo">
                        <img
                          src={user.image?.trim() || "https://tracsdev.apttechsol.com/public/uploads/user_avatar.jpeg"}
                          alt="User"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                          }}
                        />

                      </div>

                      <div className="selected-user-info">
                        <div>
                          <h4>{user.name || "No Name"}</h4>
                        </div>

                        <div style={{ display: "flex", marginTop: "-0px" }}>
                          <div style={{ marginTop: "3px", marginRight: "5px" }}>
                            <IoMail />
                          </div>
                          <div
                            className="emailSpan"
                            style={{ marginTop: "-19px", marginRight: "5px" }}
                          >
                            <h5>{user.email || "No Email"}</h5>
                          </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "-20px" }}>
                          <div style={{ marginTop: "3px", marginRight: "5px" }}>
                            <FaAddressCard />
                          </div>
                          <div
                            className="emailSpan"
                            style={{ marginTop: "-19px", marginRight: "5px" }}
                          >
                            <h5>{user?.listings?.[0]?.title || "No Bussiness name"}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="omove">
                      {" "}
                      <RxCross1
                        size={20}
                        color="red"
                        onClick={() => handleRemove(user.email)}
                        style={{ fontSize: "30px" }}
                      />{" "}
                    </div>
                  </div>  </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              className="scroll"
              onClick={handleChangeSequence}
              style={{ cursor: "pointer" }}
            >
              <IoPerson size={18} />
              <PiMouseScrollFill size={20} />
            </div>
            <div className="adjustp"><p>Adjust the sequence of the selected users</p></div>
          </div><div
            className="manageHeadingTEmplate"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
             {
              showTakeAction2 && <div style={{marginTop:"-110px",position:"absolute",width:"350px",borderRadius:"10px",opacity:"0.9",padding:"10px",height:"90px",background:"black",color:"white"}}><div dangerouslySetInnerHTML={{ __html: adjustInternalhtml(field2 || "") }}  onMouseLeave={() => setTakeAction2(false)}/></div>
            }
            <div style={{ display: "flex", marginBottom: "-29px" }}>
              <div>
                <label>Select Template </label>
              </div>
              <div  onMouseEnter={() => setTakeAction2(true)} style={{marginTop:"2px",marginLeft:"6px"}}><FaCircleQuestion /></div>
              <div style={{ marginTop: "-9px", marginLeft: "7px" }} onClick={handelbest}>
                <p style={{ fontSize: "12px !important",textDecoration:"underline" }} className="pset">
                  Best Practices ?
                </p>
              </div>{" "}
              {bestPractice && (
                <div className="practice-overlay">
                  <div className="practiceHolder">
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", borderBottom: "1px solid black" }}>
                      <div><strong style={{ fontSize: "20px" }}>Help</strong></div>
                      <div onClick={handelbestcancel}><RxCross2 /></div>
                    </div>
                  <div dangerouslySetInnerHTML={{ __html: adjustInternalhtml(field4 || "") }} ></div>
                  </div></div>
              )}
            </div>
            <div>
              <Link to='/email' style={{ textDecoration: "none", color: "inherit" }}>  <label>ManageTemplates</label></Link>
            </div>
          </div>
          <br />
          <select
            className="templateSelect"
            value={selectedTemplate}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedTemplate(selected);
              const selectedTemplateObj = data.templates.find(
                (t) => t.id === parseInt(selected)
              );
              if (selectedTemplateObj) {
                // Clean HTML before setting message
                const plainText = stripHtml(selectedTemplateObj.email_body);
                const wggtext = adjustInternalHtml(selectedTemplateObj.email_body)
                setMessage(wggtext);
                setGGText(wggtext)
              } else {
                setMessage("");
              }
            }}
          >
            <option value="">Select Template</option>
            {data.templates?.map((temp) => (
              <option key={temp.id} value={temp.id}>
                {temp.template_name}
              </option>
            ))}
          </select>

          <br />
          <label>Subject</label>
          <br />
          <input
            type="text"
            className="subjectInput"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <br />
          <div style={{ display: "flex" }}>
            <div><button
              style={{ background: "#ffc107", color: "black" }}
              type="button"
              onClick={() => {
                if (selectedEmails.length < 2) {
                  setValidationError("Please select at least two users to replace tokens.");
                  return;
                }

                const [user1, user2] = selectedEmails;
                let replaced = message
                  .replace(/\[\[name_1\]\]/gi, user1.name)
                  .replace(/\[\[name_2\]\]/gi, user2.name);
let replaced1 = ggText
                  .replace(/\[\[name_1\]\]/gi, user1.name)
                  .replace(/\[\[name_2\]\]/gi, user2.name);

                setMessage(replaced);
                setGGText(replaced1)
                setValidationError(""); // clear error
              }}
            >
              Replace Tokens
            </button></div><div className="repTokens"><p> Replaces [[name_1]], [[name_2]], etc., with selected names</p></div>
          </div>
          <br />
          <label>Message</label>
          <br />
          <div 
            className="text-Area"
            contentEditable
            dangerouslySetInnerHTML={{ __html: adjustInternalHtml(ggText) }}
            onInput={(e) => setGGText(e.currentTarget.innerHTML)}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              minHeight: "100px",
              marginTop:"20px",
              marginBottom:"20px",
              background:"white",
            }}
          ></div>
{/*
      <textarea
            className="messageText"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
*/}
      
          <br />
          <div style={{ marginTop: "0px" ,marginBottom:"20px",color:"#e6410fff",whiteSpace: 'pre-line',fontWeight:"600"}}>{msg}</div>
          <div className="lastbutton" style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                checked={!!signature}
              onChange={(e) => {
  const checked = e.target.checked;
  const rawSignature = data.signature.name;
  const wrappedSignature = `<div class="signature-block">${rawSignature}</div>`;
  const htmlSignature = adjustInternalHtml(wrappedSignature);

  if (checked) {
    setGGText((prev) => prev + htmlSignature);
    setSignature(htmlSignature);
  } else {
    setGGText((prev) => prev.replace(signature, "").trim());
    setSignature("");
  }
}}

              />
                  {
              showTakeAction3 && <div className="showTakeAction3" style={{marginTop:"-130px",position:"absolute",width:"350px",borderRadius:"10px",opacity:"0.9",padding:"10px",height:"90px",color:"white"}}><div dangerouslySetInnerHTML={{ __html: adjustInternalhtml(field3 || "") }} onMouseLeave={()=>setTakeAction3(false)}/></div>
            }
              <h3 style={{marginLeft:"4PX"}}>Include Signature</h3><div style={{ marginLeft: "5px", marginTop: "5px" }} onMouseEnter={() => setTakeAction3(true)}><FaCircleQuestion /></div>
            </div>
            <div className="formButtons">
              <button style={{ background: "#dc3545", height: "37px", fontSize: "1rem", marginTop: "20px" }}>Cancel</button>
              <button
                style={{ marginLeft: "10px", background: "#163b6d", fontSize: "1rem", height: "37px", marginTop: "20px" }}
                type="submit"
              >
                Send
              </button>
            </div>


          </div>
        </form> {validationError && (
          <p style={{ color: "red", marginTop: "5px", whiteSpace: "pre-line" }}>
            {validationError}
          </p>
        )}
      </div>

    </div>
  );
};

export default MakeIntroduction;
