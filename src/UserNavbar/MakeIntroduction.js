import React, { useEffect } from "react";
import "./MakeIntroduction.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMail, IoPerson } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoMdPerson } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Heaader/Header";
import Navbar from "../components/Navbar/Navbar";
import { ImCross } from "react-icons/im";
import Footer from "../components/Footer/Footer";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";
import { PiMouseScrollFill } from "react-icons/pi";

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
  const [recepientType, setRecipientType] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [message, setMessage] = useState(""); // New state
  const [data, setData] = useState("");
  const [signature, setSignature] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [groupName, setGroupName] = useState("");

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
  const handelcross = () => {
    showAdd(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");

    const validEmails = selectedEmails.filter((user) => {
      const domain = user.email.split("@")[1];
      return user.email.includes("@") && !blockedDomains.includes(domain);
    });

    if (validEmails.length < 2) {
      setMsg("Select at least two emails.");
      return;
    }

    // Extract first two selected users
    const [member, contact] = validEmails;

    // Replace placeholders
    const finalMessage = message
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
        const token = localStorage.getItem("authToken");
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
        console.log(response.data);
      } catch (err) {
        setMsg(err.response?.data?.message || "Something went wrong.");
      }
    };

    fetchData();
  }, []);

  const handleAddContact = async (e) => {
    const token = localStorage.getItem("authToken");
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
  if (selectedEmails.length > 0) {
    const businessNames = selectedEmails
      .map((user) => user.business_name)
      .filter(Boolean) // Remove undefined/null
      .join("  &  ");
    setSubject(`Introduction : <>${businessNames}`);
  } else {
    setSubject("");
  }
}, [selectedEmails]);
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
          <button style={{ borderRadius: "30px", border: "transparent" }}>
            <span>
              <Link to="/inbox">
                <TiArrowBackOutline color="white" size={35} />
              </Link>
            </span>{" "}
          </button>
        </div>
        <div className="prevIntro">
          <Link to="/inbox">
            {" "}
            <button>Previous Introduction</button>
          </Link>
        </div>
      </div>

      <div className="info-holder">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>To</label>
            <br />
            <select
              className="toSelect"
              value={recepientType}
              onChange={(e) => setRecipientType(e.target.value)}
            >
              <option value="undefined" >Select Member Type</option>
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
            <div className="checkbox-list">
          {data.userslist
  ?.filter((user) => {
    const searchMatch = user.business_name
      ?.toLowerCase()
      .includes(searchText.toLowerCase());

    // If no recipient type selected yet, show all users
    if (!recepientType) return searchMatch;

    // Filter based on selected type
    const recipientMatch =
      (recepientType === "h7_members" && user.member_type === "1") ||
      (recepientType === "tracs_members" && user.member_type === "2") ||
      (recepientType === "contacts" && user.member_type === "0");

    return searchMatch && recipientMatch;
  })
  .map((user, index) =>(
                <div key={user.id} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedEmails.some((u) => u.email === user.email)}
                    onChange={() =>
                      handleToggle(user)
                    }
                  />
                  <span className="spandiv">
                    <div className="spanImg">
                      <img
                        src={`https://tracsdev.apttechsol.com/public/${data.userslist[index]?.image}`}
                        alt="User"
                      />
                    </div>
                    <div style={{ marginTop: "-8px" }} className="spamData">
                      <h3>{user.business_name || "No Network"}</h3>
                      <div>
                        <div style={{ display: "flex" }}>
                          <div style={{ marginTop: "3px", marginRight: "5px" }}>
                            <IoMdPerson />
                          </div>
                          <div>
                            <h4>{user.name}</h4>
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div style={{ marginTop: "3px", marginRight: "5px" }}>
                            <IoMail />
                          </div>
                          <div className="emailSpan">
                            <h4>{user.email || "No Email"}</h4>
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
          
              {selectedEmails.map((user, index) => (
                 <div className="colorCOrner"> <div className="movecorner">
                  <div key={index} className="email-item">
                    <div className="selected-user-photo">
                      <img
                        src={user.image}
                        alt="User"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>

                    <div className="selected-user-info">
                      <div>
                        <h4>{user.business_name || "No Network"}</h4>
                      </div>

                      <div style={{ display: "flex", marginTop: "-0px" }}>
                        <div style={{ marginTop: "3px", marginRight: "5px" }}>
                          <IoPerson />
                        </div>
                        <div
                          className="emailSpan"
                          style={{ marginTop: "-19px", marginRight: "5px" }}
                        >
                          <h5>{user.name || "No name"}</h5>
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: "-20px" }}>
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
                    </div>
                  </div>
                  <div className="omove">
                    {" "}
                    <ImCross
                      size={20}
                      color="red"
                      onClick={() => handleRemove(user.email)}
                    />{" "}
                  </div>
                </div>  </div>
              ))}
          
          </div>
          <div
            className="scroll"
            onClick={handleChangeSequence}
            style={{ cursor: "pointer" }}
          >
            <IoPerson size={18} />
            <PiMouseScrollFill size={20} />
          </div>
          <div
            className="manageHeadingTEmplate"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", marginBottom: "-29px" }}>
              <div>
                <label>Select Template </label>
              </div>
              <div style={{ marginTop: "-9px", marginLeft: "7px" }}>
                <p style={{ fontSize: "12px !important" }} className="pset">
                  Best Practices ?
                </p>
              </div>{" "}
            </div>
            <div>
            <Link to='/email' style={{textDecoration:"none",color:"inherit"}}>  <label>ManageTemplate</label></Link>
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
                setMessage(selectedTemplateObj.email_body);
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
          <label>Message</label>
          <br />
          <textarea
            className="messageText"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <div className="lastbutton" style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                checked={signature}
                onChange={(e) =>
                  setSignature(e.target.checked ? data.signature : "")
                }
              />
              <h3>Include Signature</h3>
            </div>
            <div className="formButtons">
              <button style={{ background: "red" }}>Cancel</button>
              <button
                style={{ marginLeft: "10px", background: "green" }}
                type="submit"
              >
                send
              </button>
            </div>
            <div>{msg}</div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default MakeIntroduction;
