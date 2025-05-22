import React, { useEffect } from "react";
import "./MakeIntroduction.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoMdPerson } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Heaader/Header";
import Navbar from "../components/Navbar/Navbar";
import { ImCross } from "react-icons/im";
import Footer from "../components/Footer/Footer";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";

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
    {
      id: 1,
      network: "H7 Media Network",
      name: "Dan Beckman",
      email: "dan@vibrantfloorsbydan.com",
      photo:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBiZWluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 12,
      network: "H7 Media Network",
      name: "Youssef Tawfik",
      email: "youssef@revi.agency",
      photo:
        "https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg",
    },
    {
      id: 11,
      network: "H7 Media Network",
      name: "Daniel Earl",
      email: "danielearl93@gmail.com",
      photo:
        "https://static.vecteezy.com/system/resources/previews/007/209/020/non_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg",
    },
    {
      id: 2,
      network: "H7 Media Network",
      name: "Daniel Curry",
      email: "daniel@indysitedepartment.com",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      network: "H7 Media Network",
      name: "Daniel Rubenstein",
      email: "daniel@allinentry.com",
      photo:
        "https://static.vecteezy.com/system/resources/previews/010/359/290/non_2x/headshot-of-young-lovely-woman-keeps-hands-on-neck-has-european-appearance-happy-to-hear-pleasant-words-wears-casual-sweater-isolated-over-blue-background-human-face-expressions-concept-free-photo.JPG",
    },
    {
      id: 6,
      network: "H7 Media Network",
      name: "Dan O'Malia",
      email: "daniel.omalia@northwest.com",
      photo:
        "https://thumbs.dreamstime.com/b/beautiful-young-woman-clean-fresh-skin-look-camera-girl-beauty-face-care-facial-treatment-cosmetology-beauty-spa-118355246.jpg",
    },
    {
      id: 17,
      network: "H7 Media Network",
      name: "Dan Hackett",
      email: "dan@theprofitarchitect.com",
      photo:
        "https://www.shutterstock.com/image-photo/happy-young-man-portrait-handsome-260nw-262734242.jpg",
    },
  ]);
  const blockedDomains = ["gmail.com", "yahoo.com", "hotmail.com"];
  const [msg, setMsg] = useState("");
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [subject, setSubject] = useState("");
  const [addContacts, showAdd] = useState(false);
  const [recepientType, setRecipientType] = useState("H7 Members");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [message, setMessage] = useState(""); // New state
  const [data, setData] = useState("");
  const[signature,setSignature]=useState("")
  const handleToggle = (user, image) => {
    const selected = selectedEmails.find((item) => item.email === user.email);
    if (selected) {
      setSelectedEmails((prevSelected) =>
        prevSelected.filter((item) => item.email !== user.email)
      );
    } else {
      setSelectedEmails((prevSelected) => [
        ...prevSelected,
        { ...user, photo: image },
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          "https://tracsdev.apttechsol.com/api/sendmailintro/introduction_email",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        setMsg(err.response?.data?.message || "Something went wrong.");
      }
    };

    fetchData();
  }, []);

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
              <option value="members">H7 Members</option>
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
              {recepientType === "myContact" && (
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
                  <input style={{ width: "100%", marginTop: "10px" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3>last Name</h3>
                  <input style={{ width: "100%", marginTop: "10px" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3>Email </h3>
                  <input style={{ width: "100%", marginTop: "10px" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3>Group Name </h3>
                  <input style={{ width: "100%", marginTop: "10px" }} />
                </div>
                <div style={{ display: "flex", padding: "20px" }}>
                  <button style={{ background: "grey" }}>cancel</button>
                  <button style={{ background: "orange", marginLeft: "20px" }}>
                    SAVE CONTACT
                  </button>
                </div>
              </div>
            )}
            <div className="checkbox-list">
              {data.userslist?.map((user, index) => (
                <div key={user.id} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedEmails.some((u) => u.email === user.email)}
                    onChange={() =>
                      handleToggle(user, data.partners[index]?.image)
                    }
                  />
                  <span className="spandiv">
                    <div className="spanImg">
                      <img src={data.partners[index]?.image} alt="User" />
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
            {selectedEmails.map((user) => (
              <div key={user.email} className="email-item">
                <div className="selected-user-photo">
                  <img
                    src={user.photo}
                    alt={user.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="selected-user-info">
                  <span>
                    {user.name} ({user.email})
                  </span>
                </div>
                <ImCross
                  size={20}
                  color="red"
                  onClick={() => handleRemove(user.email)}
                />
              </div>
            ))}
          </div>

          <div
            className="manageHeadingTEmplate"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", marginBottom: "-29px" }}>
              <div>
                <label>Select Template </label>
              </div>
              <div style={{ marginTop: "-7px", marginLeft: "7px" }}>
                <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Best Practices ?
                </p>
              </div>{" "}
            </div>
            <div>
              <label>Manage Template</label>
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
  onChange={(e) => setSignature(e.target.checked ? data.signature : "")}
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
