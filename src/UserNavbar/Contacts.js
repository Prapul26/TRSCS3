import React, { useState } from "react";
import "./Contacts.css";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    { id: 1, firstName: "John", lastName: "Doe", group: "H7 member", email: "john@example.com", createdOn: "2024-01-28" },
    { id: 2, firstName: "Jane", lastName: "Smith", group: "TRACS member", email: "jane@example.com", createdOn: "2024-01-27" },
    { id: 3, firstName: "Alice", lastName: "Johnson", group: "H7 member", email: "alice@example.com", createdOn: "2024-01-26" },
    { id: 4, firstName: "Bob", lastName: "Brown", group: "TRACS member", email: "bob@example.com", createdOn: "2024-01-25" }
  ]);

  // Function to delete a contact
  const handleDelete = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <UserHeader />
      
      <div className="CPPPPP">
        <div className="usernav">
          <SideNav />
        </div>
        <div className="CPP"><MobileNavbar />
          <div className="contacts-container">
          <div className="d-header">
<h2>Contacts</h2>
          </div>
            <div className="contacts-buttons">
              <div className="import">
                <div>
                  <input type="file" />
                </div>
                <div className="importB">
                  <button>Import</button>
                </div>
              </div>
              <div className="add">
                <div className="downloadB">
                  <button>Download Template</button>
                </div>
                <div className="addB">
                  <Link to='/addContacts' style={{ textDecoration: "none", color: "inherit" }}>
                    <button>Add Contacts</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="contacts-table">
              <table>
                <thead>
                  <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Group name</td>
                    <td>Email</td>
                    <td>Created On</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr key={contact.id}>
                      <td>{contact.firstName}</td>
                      <td>{contact.lastName}</td>
                      <td>{contact.group}</td>
                      <td>{contact.email}</td>
                      <td>{contact.createdOn}</td>
                      <td>
                        <Link to='/addContacts'><button style={{ background: "green" }}>Edit</button></Link>
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
  );
};

export default Contacts;
