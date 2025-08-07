import React, { useEffect, useState } from "react";
import "./Contacts.css";
import UserHeader from "../components/UserHeader";
import { Link, useNavigate } from "react-router-dom";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
import { IoIosInformationCircle } from "react-icons/io";
import { FaWindowMinimize } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { ImCross } from "react-icons/im";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
    const [showpage, setShowPage] = useState(false);
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
    let isCalled = false;
    const fetchContacts = async () => {
      if (isCalled) return;
      isCalled = true;
      const token = sessionStorage.getItem("authToken");
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
  const token = sessionStorage.getItem("authToken");

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
    <div>
      {
              showpage && (
                <div className="pageURLContainer">
                  <div className="pageURLHolder" >
                    <div className="pageURLHeader">
                      <div><h4 style={{ color: "white" }}>View, add, and manage your saved contacts</h4></div>
                      
                      <div onClick={closeURlCLick} style={{ marginTop: "9px" }}> <ImCross /></div>
                    </div>
                    <div className="pageiframeContainer">
                      <div className="pageIframe"><iframe src="https://tracsdev.apttechsol.com/helpsection-descriptionnew/16" /></div>
      
                    </div>
                  </div>
                </div>
              )
            }
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
                 <div style={{ display: "flex", marginTop: "14px" }} className="urlPage" onClick={urlClick}><div><p>View, add, and manage your saved contacts</p></div>
                                      <div style={{ marginTop: "-18px", marginLeft: "5px" }}><IoIosInformationCircle size={15} /></div>
                                    </div>
              </div>

              <div className="contacts-buttons">
                <div className="import">
                 <div className="importA"><input type="file" /></div> 
                 <div></div>
                  
                </div>
                <div className="add">
                  <div className="importB">
                    <button>Import</button>
                  </div>
                  <div className="downloadB">
                    <button>Download Template</button>
                  </div>
                  
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
    </div></div>
  );
};

export default Contacts;
