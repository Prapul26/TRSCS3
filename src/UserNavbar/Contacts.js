import React, { useEffect, useState } from "react";
import "./Contacts.css";
import UserHeader from "../components/UserHeader";
import { Link, useNavigate } from "react-router-dom";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    let isCalled = false;
    const fetchContacts = async () => {
      if (isCalled) return;
      isCalled = true;
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/view-introduction-email-list`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setContacts(response.data.template.data);
      } catch (error) {
        setError("Failed to fetch contacts.");
      }
    };

    fetchContacts();
  }, []);

const handleDelete = async (id) => {
  const token = localStorage.getItem("authToken");

  try {
    await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/destroy-contact-from-intro/${id}`,
      
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  } catch (err) {
    console.error("Delete failed:", err);
    setError("Failed to delete the contact.");
  }
};

  const navigate= useNavigate();
const handleEdit=(id)=>{
  
navigate(`/editContact/${id}`)
}
  return (
    <div className="mobMenuaa">
      <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
      <div>
        <UserHeader />

        <div className="CPPPPP">
          <div className="usernav">
            <SideNav />
          </div>
          <div className="CPP">
            <MobileNavbar showMobnav={showMobnav} />
            <div className="contacts-container">
              <div className="d-header">
                <h2 style={{color:"#334e6f !important"}}>Contacts</h2>
              </div>

              <div className="contacts-buttons">
                <div className="import">
                 <div className="importA"><input type="file" /></div> 
                  <div className="importB">
                    <button>Import</button>
                  </div>
                </div>
                <div className="add">
                  <div className="downloadB">
                    <button>Download Template</button>
                  </div>
                  <div className="addB">
                    <Link
                      to="/addContacts"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <button>Add Contacts</button>
                    </Link>
                  </div>
                </div>
              </div>
<div className="er">


              <div className="contacts-table">
                {error && <p className="error-message">{error}</p>}
                <table>
                  <thead>
                    <tr>
                      <td  style={{fontSize:"16px"}}>First Name</td>
                      <td  style={{fontSize:"16px"}}>Last Name</td>
                      <td  style={{fontSize:"16px"}}>Group Name</td>
                      <td  style={{fontSize:"16px"}}>Email</td>
                      <td  style={{fontSize:"16px"}}>Created On</td>
                      <td  style={{fontSize:"16px"}}>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td  style={{fontSize:"15px"}}>{contact.first_name}</td>
                        <td  style={{fontSize:"15px"}}>{contact.last_name}</td>
                        <td  style={{fontSize:"15px"}}>{contact.group_name}</td>
                        <td  style={{fontSize:"15px"}}>{contact.email}</td>
                        <td  style={{fontSize:"15px"}}>{contact.created_at}</td>
                        <td>
                      
                            <button style={{ background: "green" }} onClick={()=>handleEdit(contact.id)}>Edit</button>
                       
                          <button
                            style={{ background: "red", marginLeft: "5px" }}
                            onClick={() => handleDelete(contact.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
               
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
