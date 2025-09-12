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
import * as XLSX from "xlsx";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showpage, setShowPage] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState(""); // "success" or "error"


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const fetchContacts = async () => {
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

  useEffect(() => {
    fetchContacts();
  }, []);

  // Step 2: handle import click
// helper function
const showTempMessage = (msg, type = "success") => {
  setMessage(msg);
  setMessageType(type);
  setTimeout(() => {
    setMessage("");
    setMessageType("");
  }, 5000);
};


const handleImport = async () => {
  if (!selectedFile) {
    showTempMessage("⚠ Please select a file first.");
    return;
  }

  const token = sessionStorage.getItem("authToken");

  try {
    const reader = new FileReader();

    reader.onload = async (evt) => {
      const fileExt = selectedFile.name.split(".").pop().toLowerCase();
      let data = evt.target.result;
      let workbook;

      if (fileExt === "csv") {
        workbook = XLSX.read(data, { type: "string" });
      } else {
        workbook = XLSX.read(data, { type: "binary" });
      }

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const rows = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

      if (!rows.length) {
        showTempMessage("⚠ No data found in file. Check headers in your file.");
        return;
      }

      let imported = 0;
      let skipped = 0;
      let failed = 0;
      let duplicates = 0;

      const existingEmails = new Set(contacts.map(c => c.email.toLowerCase()));

      for (let row of rows) {
        const firstName = row["First Name"];
        const lastName = row["Last Name"];
        const email = row["Email"];
        const groupName = row["Group Name"];

        if (!firstName || !lastName || !email || !groupName) {
          skipped++;
          continue;
        }

        if (existingEmails.has(email.toLowerCase())) {
          duplicates++;
          continue;
        }

        try {
          await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/contact_store_form`,
            {
              first_name: firstName,
              last_name: lastName,
              email,
              group_name: groupName,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          imported++;
          existingEmails.add(email.toLowerCase());
        } catch (err) {
          console.error("❌ Failed to import:", row, err.response?.data);
          failed++;
        }
      }

      let finalMsg = "";
      if (imported > 0) finalMsg += ` .   ✅ ${imported} contacts imported successfully .  `;
      if (duplicates > 0) finalMsg += `.    ⚠ ${duplicates} contacts already exist  . `;
      if (skipped > 0) finalMsg += `.    ⚠ ${skipped} rows skipped (missing fields)  . `;
      if (failed > 0) finalMsg += `.    ❌ ${failed} contacts failed to import  .`;
const type = imported > 0 && failed === 0 ? "success" : "error";
      showTempMessage(finalMsg.trim(),type);
      fetchContacts();
    };

    if (selectedFile.name.endsWith(".csv")) {
      reader.readAsText(selectedFile);
    } else {
      reader.readAsBinaryString(selectedFile);
    }
  } catch (error) {
    console.error("Error reading file:", error);
    showTempMessage("❌ Failed to import contacts.");
  }
};




  const handleDownloadTemplate = () => {
    // Define the header row
    const headers = [["First Name", "Last Name", "Email", "Group Name"]];

    // Create a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(headers);

    // Create a workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");

    // Trigger download
    XLSX.writeFile(workbook, "contacts_template.xlsx");
  };


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
        console.log("contacts :" + contacts)
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

  const navigate = useNavigate();
  const handleEdit = (contact) => {
    navigate(`/editContact/${contact.id}`, { state: { contact } });
  };


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
         { <div className="errmsg" style={{ backgroundColor: messageType === "success" ? "green" : "red"}}><p>{message}</p></div>}
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
                  <h2 style={{ color: "#334e6f !important" }}>Contacts</h2>
                  <div style={{ display: "flex", marginTop: "14px" }} className="urlPage" onClick={urlClick}><div><h3>View, add, and manage your saved contacts</h3></div>
                    <div style={{ marginTop: "-15px", marginLeft: "5px" }}><IoIosInformationCircle size={15} /></div>
                  </div>
                </div>

                <div className="contacts-buttons">
                  <div className="giofo" >
                    <div className="importB">
                      <button onClick={handleDownloadTemplate}>Download Template</button>

                    </div>


                    <div className="importA">
                      <input type="file" accept=".xlsx,.xls,.csv" onChange={handleFileChange} />
                    </div>

                  </div>
                  <div className="pokijhabvc">
                    <div className="downloadB">
                      <button type="button" onClick={handleImport}>
                        Import
                      </button>
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
                          <td style={{ fontSize: "16px" }}>First Name</td>
                          <td style={{ fontSize: "16px" }}>Last Name</td>
                          <td style={{ fontSize: "16px" }}>Group Name</td>
                          <td style={{ fontSize: "16px" }}>Email</td>
                          <td style={{ fontSize: "16px" }}>Created On</td>
                          <td style={{ fontSize: "16px" }}>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.map((contact) => (
                          <tr key={contact.id}>
                            <td style={{ fontSize: "15px" }}>{contact.first_name}</td>
                            <td style={{ fontSize: "15px" }}>{contact.last_name}</td>
                            <td style={{ fontSize: "15px" }}>{contact.group_name}</td>
                            <td style={{ fontSize: "15px" }}>{contact.email}</td>
                            <td style={{ fontSize: "15px" }}>
                              {new Date(contact.created_at).toISOString().split("T")[0]}
                            </td>

                            <td>

                              <button style={{ background: "green" }} onClick={() => handleEdit(contact)}><MdOutlineModeEdit /></button>

                              <button
                                style={{ background: "red", marginLeft: "5px" }}
                                onClick={() => handleDelete(contact.id)}
                              >
                                <MdDelete />
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
