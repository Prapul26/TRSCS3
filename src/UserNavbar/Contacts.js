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
                <h2>Contacts</h2>
              </div>

              <div className="contacts-buttons">
                <div className="import">
                  <input type="file" />
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

              <div className="contacts-table">
                {error && <p className="error-message">{error}</p>}
                <table>
                  <thead>
                    <tr>
                      <td>First Name</td>
                      <td>Last Name</td>
                      <td>Group Name</td>
                      <td>Email</td>
                      <td>Created On</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td>{contact.first_name}</td>
                        <td>{contact.last_name}</td>
                        <td>{contact.group_name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.created_at}</td>
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
                {contacts.length === 0 && !error && <p>No contacts found.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
