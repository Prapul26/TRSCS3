import React, { useState, useEffect } from "react";
import "./EditTemplate.css";
import "./AddContacts.css";
import UserHeader from "../components/UserHeader";
import { Link, useLocation, useParams } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import SideNav from "./SideNav";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";

const EditContact = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate=useLocation()
const contact = location.state?.contact;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [groupName, setGroupName] = useState("");
  const [message, setMessage] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

useEffect(() => {
  if (contact) {
    setFirstName(contact.first_name);
    setLastName(contact.last_name);
    setEmail(contact.email);
    setGroupName(contact.group_name);
  }
}, [contact]);
  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("authToken");

    if (!firstName || !lastName || !email || !groupName) {
      setMessage("Please fill in all required fields.");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/contact_edit_form/${id}`,
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          group_name: groupName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    
      setMessage("Contact updated successfully!");
     
    } catch (error) {
      setMessage(error.response?.data?.message || "Error updating the Contact");
    }
  };

  return (
    <div className="addcon">
      <UserHeader />
      {showSidebar && <MobileMenu />}
      <div className="usernav">
        <SideNav />
      </div>
      <div className="addconHolder">
        <MobileNavbar showMobnav={showMobnav} />
        <div className="d-header">
          <h2>Edit Contact</h2>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <button style={{ borderRadius: "30px", border: "transparent" }}>
            <span>
              <Link to="/contacts">
                <TiArrowBackOutline color="white" size={35} />
              </Link>
            </span>
          </button>
        </div>

        <div className="EditContact-container">
          <form onSubmit={handleSubmit}>
            <label>
              First Name<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />

            <label>
              Last Name<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />

            <label>
              Group Name<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <br />

            <label>
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="saveContactsButton">
              <button type="submit">SAVE</button>
            </div>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
